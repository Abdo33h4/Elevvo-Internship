// Get DOM elements
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.querySelectorAll('.nav-link');
const pageTitle = document.getElementById('pageTitle');
const contentArea = document.getElementById('contentArea');
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileOverlay = document.getElementById('mobileOverlay');

// Check if we're on mobile
let isMobile = window.innerWidth <= 768;

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
}

// Toggle sidebar function
function toggleSidebar() {
    if (isMobile) {
        sidebar.classList.toggle('open');
        mobileOverlay.classList.toggle('active');
    } else {
        sidebar.classList.toggle('collapsed');
    }
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('darkMode', isDark);
}

// Add event listeners
toggleBtn.addEventListener('click', toggleSidebar);
darkModeToggle.addEventListener('click', toggleDarkMode);
mobileOverlay.addEventListener('click', toggleSidebar);

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Show loading state briefly
        contentArea.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 200px;"><div class="loading"></div></div>';

        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        this.classList.add('active');

        // Get page data
        const page = this.dataset.page;
        const pageText = this.querySelector('.text').textContent;

        // Update page title
        pageTitle.textContent = pageText;

        // Load content after a brief delay (simulating data loading)
        setTimeout(() => {
            loadContent(page);
        }, 300);

        // Close sidebar on mobile after selection
        if (isMobile && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            mobileOverlay.classList.remove('active');
        }
    });
});

// Load content function
function loadContent(page) {
    const contents = {
        dashboard: `
                    <div class="dashboard-content">
                        <div class="content-card">
                            <h2>📊 Your Academic Overview</h2>
                            <p>Here's a quick summary of your academic progress this semester.</p>
                            
                            <div class="stats-grid">
                                <div class="stat-card">
                                    <h3>4</h3>
                                    <p>Pending Assignments</p>
                                </div>
                                <div class="stat-card">
                                    <h3>85%</h3>
                                    <p>Average Grade</p>
                                </div>
                                <div class="stat-card">
                                    <h3>12</h3>
                                    <p>Completed Projects</p>
                                </div>
                                <div class="stat-card">
                                    <h3>3</h3>
                                    <p>New Messages</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="content-card">
                            <h3>🎯 Quick Actions</h3>
                            <p>Navigate to different sections using the sidebar menu. Try collapsing it to save space!</p>
                            <ul style="margin-top: 15px; line-height: 1.8;">
                                <li>📝 Check your latest assignments</li>
                                <li>📈 Review your grades and progress</li>
                                <li>💬 Read new messages from instructors</li>
                                <li>⚙️ Customize your dashboard settings</li>
                            </ul>
                        </div>
                    </div>
                `,
        assignments: `
                    <div class="content-card">
                        <h2>📝 Your Assignments</h2>
                        <p>Stay on top of your coursework with upcoming and pending assignments.</p>
                        
                        <ul class="assignment-list">
                            <li class="assignment-item">
                                <div>
                                    <strong>Mathematics Homework Chapter 7</strong>
                                    <br><small>Algebra II - Problems 1-25</small>
                                </div>
                                <span class="assignment-due due-soon">Due Tomorrow</span>
                            </li>
                            <li class="assignment-item">
                                <div>
                                    <strong>History Essay: World War II Impact</strong>
                                    <br><small>US History - 1000 words minimum</small>
                                </div>
                                <span class="assignment-due">Due Friday</span>
                            </li>
                            <li class="assignment-item">
                                <div>
                                    <strong>Science Lab Report: Chemical Reactions</strong>
                                    <br><small>Chemistry - Lab #5 Results</small>
                                </div>
                                <span class="assignment-due">Due Next Week</span>
                            </li>
                            <li class="assignment-item">
                                <div>
                                    <strong>English Literature Analysis</strong>
                                    <br><small>Analysis of "To Kill a Mockingbird"</small>
                                </div>
                                <span class="assignment-due">Due in 2 weeks</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="content-card">
                        <h3>📊 Assignment Statistics</h3>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <h3>15</h3>
                                <p>Completed This Month</p>
                            </div>
                            <div class="stat-card">
                                <h3>92%</h3>
                                <p>On-Time Submission Rate</p>
                            </div>
                        </div>
                    </div>
                `,
        grades: `
                    <div class="content-card">
                        <h2>📈 Your Current Grades</h2>
                        <p>Track your academic performance across all subjects.</p>
                        
                        <div style="margin: 20px 0;">
                            <div class="assignment-item">
                                <div>
                                    <strong>Mathematics (Algebra II)</strong>
                                    <br><small>Mr. Johnson • Period 2</small>
                                </div>
                                <span style="font-size: 18px; font-weight: bold; color: #059669;">A- (87%)</span>
                            </div>
                            <div class="assignment-item">
                                <div>
                                    <strong>US History</strong>
                                    <br><small>Ms. Davis • Period 4</small>
                                </div>
                                <span style="font-size: 18px; font-weight: bold; color: #059669;">B+ (85%)</span>
                            </div>
                            <div class="assignment-item">
                                <div>
                                    <strong>Chemistry</strong>
                                    <br><small>Dr. Wilson • Period 6</small>
                                </div>
                                <span style="font-size: 18px; font-weight: bold; color: #059669;">A (92%)</span>
                            </div>
                            <div class="assignment-item">
                                <div>
                                    <strong>English Literature</strong>
                                    <br><small>Mrs. Thompson • Period 1</small>
                                </div>
                                <span style="font-size: 18px; font-weight: bold; color: #d97706;">B (82%)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="content-card">
                        <h3>📊 Grade Trends</h3>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <h3>3.4</h3>
                                <p>Current GPA</p>
                            </div>
                            <div class="stat-card">
                                <h3>↗️ +0.2</h3>
                                <p>Change from Last Semester</p>
                            </div>
                        </div>
                    </div>
                `,
        messages: `
                    <div class="content-card">
                        <h2>💬 Messages & Notifications</h2>
                        <p>Stay connected with your teachers and classmates.</p>
                        
                        <div style="margin: 20px 0;">
                            <div class="assignment-item" style="border-left-color: #ef4444;">
                                <div>
                                    <strong>Ms. Davis (US History)</strong>
                                    <br><small>"Great work on your World War II essay! Your analysis of the economic impact was particularly insightful. Keep it up!"</small>
                                    <br><em style="color: #6b7280; font-size: 12px;">2 hours ago</em>
                                </div>
                                <span style="color: #ef4444;">●</span>
                            </div>
                            <div class="assignment-item" style="border-left-color: #ef4444;">
                                <div>
                                    <strong>School Administration</strong>
                                    <br><small>"Reminder: Parent-Teacher conferences are scheduled for next week. Please check your schedule in the student portal."</small>
                                    <br><em style="color: #6b7280; font-size: 12px;">1 day ago</em>
                                </div>
                                <span style="color: #ef4444;">●</span>
                            </div>
                            <div class="assignment-item">
                                <div>
                                    <strong>Dr. Wilson (Chemistry)</strong>
                                    <br><small>"Lab safety reminder: Please review the safety protocols before tomorrow's experiment. Safety goggles are mandatory!"</small>
                                    <br><em style="color: #6b7280; font-size: 12px;">3 days ago</em>
                                </div>
                                <span style="color: #6b7280;">○</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="content-card">
                        <h3>📨 Quick Stats</h3>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <h3>3</h3>
                                <p>Unread Messages</p>
                            </div>
                            <div class="stat-card">
                                <h3>25</h3>
                                <p>Total This Week</p>
                            </div>
                        </div>
                    </div>
                `,
        settings: `
                    <div class="content-card">
                        <h2>⚙️ Dashboard Settings</h2>
                        <p>Customize your learning experience and preferences.</p>
                        
                        <div style="margin: 30px 0;">
                            <h3 style="margin-bottom: 15px;">🎨 Appearance</h3>
                            <div style="margin: 15px 0;">
                                <button onclick="toggleDarkMode()" style="background: var(--primary-color); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; margin-right: 10px;">Toggle Dark Mode</button>
                                <span style="color: var(--text-secondary);">Switch between light and dark themes</span>
                            </div>
                        </div>
                        
                        <div style="margin: 30px 0;">
                            <h3 style="margin-bottom: 15px;">🔔 Notifications</h3>
                            <div style="margin: 15px 0;">
                                <label style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
                                    <input type="checkbox" checked> Email notifications for new assignments
                                </label>
                                <label style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
                                    <input type="checkbox" checked> Grade update alerts
                                </label>
                                <label style="display: flex; align-items: center; gap: 10px; margin: 10px 0;">
                                    <input type="checkbox"> Daily schedule reminders
                                </label>
                            </div>
                        </div>
                        
                        <div style="margin: 30px 0;">
                            <h3 style="margin-bottom: 15px;">👤 Profile</h3>
                            <p style="color: var(--text-secondary);">Update your profile information and academic preferences.</p>
                            <div style="margin: 15px 0;">
                                <button style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                `
    };

    contentArea.innerHTML = contents[page] || contents.dashboard;
}

// Handle window resize
window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth <= 768;

    if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;

        if (isMobile) {
            sidebar.classList.remove('collapsed');
            sidebar.classList.remove('open');
            mobileOverlay.classList.remove('active');
        } else {
            sidebar.classList.remove('open');
            mobileOverlay.classList.remove('active');
        }
    }
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMobile && sidebar.classList.contains('open')) {
        toggleSidebar();
    }
});

// Add some smooth scrolling to the page
document.addEventListener('DOMContentLoaded', function () {
    // Initialize any additional features here
    console.log('Student Dashboard loaded successfully! 🎓');
});