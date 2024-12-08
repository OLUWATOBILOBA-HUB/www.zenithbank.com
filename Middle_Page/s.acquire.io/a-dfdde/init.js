/* eslint-disable */

((function() {

    // Setup Configs..

    var host = 's.acquire.io',
        config_url = 'https://s.acquire.io/a-dfdde/init/frontend',
        jsbundle_url = 'https://s.acquire.io/dc-eu4/dist/frontend.95cc1126a42920b2f6beeecd5aa421cc30c497d3.bundle.min.js',
        jshash_url = 'https://s.acquire.io/dc-eu4/jshash?type=frontend',
        nodejs_url = jshash_url.split('/').splice(0, 3).join('/') + '/',
        env = config_url.indexOf('s.acquire.io') >= 0 ? 'prod' : 'test',
        iso = false,
        config_json = {
            "account": "dfdde",
            "settings": {
                "id": 19843,
                "uid": "dfdde",
                "parent_enterprise_acc_uid": null,
                "parent_acc_id": null,
                "meta_field": {
                    "card-added": null,
                    "basic_plan_popop": null
                },
                "name": "Digital Marketing",
                "first_name": "Admin",
                "last_name": "",
                "plan_id": 4,
                "limits": {
                    "max_agents": "*",
                    "min_agents": "5",
                    "number_of_campaigns": "*",
                    "number_of_conversion": "*",
                    "number_of_department": "*",
                    "number_of_agents": "1",
                    "live_chat": "1",
                    "profiles": "1",
                    "visitor_list": "1",
                    "audio_video_calls": "1",
                    "screen_share": "1",
                    "co_browsing": "1",
                    "co_browse_with_chat": "1",
                    "co_browse_with_code": "1",
                    "co_browse_identify": 0,
                    "co_browse_live": 0,
                    "support_bot": "1",
                    "sales_bot": "1",
                    "cobrowse_video_recording": "1",
                    "sdk": "1",
                    "api_access": "1",
                    "chat_note": "1",
                    "knowledge_base": "1",
                    "smart_suggetion": "1",
                    "sso": "1",
                    "single_tenet": "1",
                    "analytic_agent": "1",
                    "analytic_chatbot": "1",
                    "analytic_general": "1",
                    "chatbot_access": "1",
                    "voip_access": "1",
                    "audit_log": 0,
                    "chat_shortcut": "1",
                    "chat_routing": "1",
                    "chat_tag": "1",
                    "custom_feedback": "1",
                    "banned_visitor": "1",
                    "feedback_on_department": 0,
                    "custom_feedback_reporting": "1",
                    "chat_conversion": "1",
                    "operating_hours": "1",
                    "quick_link": "1",
                    "file_sharing_setting": "1",
                    "domain_whitelist": "1",
                    "webhook": "1",
                    "email_piping": "1",
                    "mobile_sdk_push_notification": "1",
                    "frontend_chat_widget_apps": "1",
                    "multiple_agent_level_permission": "1",
                    "analytic_profile": "1",
                    "analytic_other_advance": 0,
                    "in_app_campign": "1",
                    "live_monitor": "1",
                    "email_compaign": "1",
                    "track_user": "1",
                    "chat_transfer": "1",
                    "chat_translate": "1",
                    "chat_widget_whitelabel": 0,
                    "profile_access_level": 0,
                    "account_switching": 0,
                    "custom_css_for_chat_widget": "1",
                    "integration_mobile_apps": "1",
                    "integration_desktop_software": "1",
                    "integration_talkdesk": 0,
                    "integration_salesforce_app_exchange": 0,
                    "integration_zendesk_marketplace": 0,
                    "integration_google_tag_manager": "1",
                    "integration_google_analytics": "1",
                    "integration_slack": "1",
                    "integration_facebook_messenger": "1",
                    "integration_zapier": "1",
                    "integration_hubspot": "1",
                    "integration_sugar_crm": "1",
                    "integration_microsoft_dynamic_crm": "1",
                    "integration_zendesk": "1",
                    "integration_salesforce": "1",
                    "integration": "1",
                    "integration_infusionsoft": "1",
                    "integration_freshservices": "1",
                    "integration_spelling_check_library": "1",
                    "integration_zoho": "1"
                },
                "chatbot": {
                    "4999": {
                        "id": 4999,
                        "account_id": 19843,
                        "parent_id": 1,
                        "title": "Acquire Support Bot",
                        "name": "Virtual Assistant",
                        "icon": "bot-avatar-1552733870886.png",
                        "visible": "private",
                        "status": "active",
                        "url": "http://127.0.0.1:6005/bot-server/bot_interaction",
                        "skip_ssl": "yes",
                        "merged_params": "{}",
                        "c_params": "{}",
                        "p_params": "{}",
                        "want_suggestion": "yes"
                    },
                    "5000": {
                        "id": 5000,
                        "account_id": 19843,
                        "parent_id": 2,
                        "title": "Acquire Sales Bot",
                        "name": "Virtual Assistant",
                        "icon": "bot-avatar-1552733575262.png",
                        "visible": "private",
                        "status": "active",
                        "url": "http://127.0.0.1:6005/bot-server/sales_bot_interaction",
                        "skip_ssl": "yes",
                        "merged_params": "{}",
                        "c_params": "{}",
                        "p_params": "{}",
                        "want_suggestion": "no"
                    }
                },
                "settings": {
                    "auto_record": "0",
                    "chat_window": "modern",
                    "window_size": "medium",
                    "widget_position": "br",
                    "widget_theme": "new",
                    "primary_color": "#e3000f",
                    "secondary_color": null,
                    "text_color": null,
                    "another_color": null,
                    "background_color": null,
                    "communication_enable": "",
                    "company_name": "",
                    "chat_shortcut_key": "/",
                    "agent_new_chat_sound": "0",
                    "agent_new_chat_notification": "0",
                    "agent_new_msg_sound": "0",
                    "agent_new_msg_notification": "1",
                    "agent_new_chat_sound_repeat": "1",
                    "form_settings": "{\"after_chat_notification_visible\":\"on\",\"chat_wait_time\":10,\"ask_to_visitor_title\":\"Please fill the below detail to making our interaction more closer.\",\"chat_wait_notified_title\":\"You will be notified soon. Stay with us!\",\"online_form_custom_fields\":\"[]\",\"offline_form_custom_fields\":\"[]\",\"online_fields_visiblility\":\"\",\"offline_fields_visiblility\":\"\",\"enable_leave_msg\":\"on\",\"offline_form_before_chat\":0,\"online_name\":\"on\",\"online_name_req\":\"required\",\"online_email\":\"on\",\"online_email_req\":\"optional\",\"online_message\":\"on\",\"online_message_req\":\"optional\",\"online_phone\":\"\",\"online_phone_req\":\"required\",\"online_department\":\"\",\"online_department_req\":\"optional\",\"offline_name\":\"on\",\"offline_name_req\":\"required\",\"offline_email\":\"on\",\"offline_phone\":\"\",\"offline_phone_req\":\"required\",\"online_name_text\":\"Full name\",\"offline_name_text\":\"Your Name\",\"online_email_text\":\"Email address\",\"offline_email_text\":\"Your email address\",\"online_message_text\":\"How can we help?\",\"offline_message\":\"\",\"offline_message_req\":\"optional\",\"offline_message_text\":\"How can we help?\",\"online_phone_text\":\"Phone Number\",\"offline_phone_text\":\"Your phone number\",\"online_department_text\":\"Choose department\",\"offline_department\":\"\",\"offline_department_req\":\"optional\",\"offline_department_text\":\"Choose department\"}",
                    "please_wait": "Please be patient, one of our agents will connect with you shortly.",
                    "hide_button": "0",
                    "cobrowse_only": "0",
                    "record_calls_tnc": "0",
                    "white_label_customization": "{\"status\":\"on\",\"company_name\":\"\",\"company_site_link\":\"\"}",
                    "offline_button_color": null,
                    "custom_theme_button": "{\"image\":\"\",\"thumb\":\"\"}",
                    "assign_agent_chat": "0",
                    "language": "en-US",
                    "show_all_agent_on_init": "0",
                    "timezone": "Africa/Algiers",
                    "working_schedule": "[{\"working_day\":\"mon\",\"working_from_time\":\"00:00\",\"working_to_time\":\"24:00\"},{\"working_day\":\"tue\",\"working_from_time\":\"00:00\",\"working_to_time\":\"24:00\"},{\"working_day\":\"wed\",\"working_from_time\":\"00:00\",\"working_to_time\":\"24:00\"},{\"working_day\":\"thu\",\"working_from_time\":\"00:00\",\"working_to_time\":\"24:00\"},{\"working_day\":\"fri\",\"working_from_time\":\"00:00\",\"working_to_time\":\"24:00\"},{\"working_day\":\"sat\",\"working_from_time\":\"00:00\",\"working_to_time\":\"24:00\"},{\"working_day\":\"sun\",\"working_from_time\":\"00:00\",\"working_to_time\":\"00:00\"}]",
                    "self_developed_theme": "0",
                    "chat_start_message": "",
                    "custom_chat_button_img": "{\"image\":\"\",\"thumb\":\"\"}",
                    "custom_css": ".tw-before-form-heading .tw-before-form-controls-heading {\nfont-size: 14px;\ncolor: #fff;\nfont-weight: normal;\n    margin: 0px 0 0px;\n    height: 30px;\n    line-height: 30px;\n}\n.tw-before-form-heading .tw-before-form-message {\n    display: none;\n}\n.tw-before-form-heading{\nheight:auto;\n}\n.tw-before-form {\n    position: relative;\n    top: auto;\n    transform: translateY(0);\n    margin-top: 0;\n}\n\n.tw-before-form.tw-before-form-fix {\n    padding-top: 5px;  \n}\n\n.main.online-chat-ui .main-content .conversations-list.new-thread .close-icon{\n     top: 7px;\n}\n\n\n.tw-before-form .tw-before-form-text-input .tw-before-form-text-control {\nfont-weight: normal;\n}\n\n\n.agents.one-agent .agent>div span {\n   width: 200px;\n}\n\n.main.online-chat-ui .main-content .conversations-list.new-thread .back_action {\n    top: 0px;\n}\n\n.main.online-chat-ui .main-header .heading .agent-col {\n      width: auto;\n}\n\n\n.agents .participants {\n     width: auto;  \n}\n\n.tw-before-form .tw-before-form-text-input {\n    margin-bottom: auto\n}\n\n.main.online-chat-ui .main-content .conversations-list.new-thread .close-icon {\n    top: 2px;\n}\n\n\n\n.feedback-form .feedback-zone .rating a {\nwidth: 53px;\n}\n\n.tw-form-body .tw-form-controls .tw-form-controls-heading {\n    font-size: 12px;\n}\n\n.available_agents.single-agent {\n    display: none;\n}\n\n\n\n.main.online-chat-ui .main-header .heading .agent-col.no-chat .agents .participants, .main.online-chat-ui .main-header .heading .agent-col.no-chat .agents .participants.plen-3, .main.online-chat-ui .main-header .heading .agent-col.no-chat .agents:hover .participants, .main.online-chat-ui .main-header .heading .agent-col.no-chat .agents:hover .participants.plen-2 {\n    width: 214px;\n}\n\n.main.main-chat-form .ic-close, .main.main-chat-form .ic-close-circle{\n     top: -25px;\n}\n\n/*IFRAME_CSS*/\n.tagove_frame.ui_status_max.a-dfdde{ min-width: 350px!important;}\n",
                    "max_chat_per_agent": "0",
                    "cobrowse_css": null,
                    "modern_btn_background_color": null,
                    "agent_round_time": "60",
                    "iframeLoadClient": "1",
                    "drawingMode": "0",
                    "hdClient": "0",
                    "nestedFrame": "0",
                    "high_load_dashboard": "1",
                    "chat_close_tags_required": "1",
                    "feedback_type": "5star",
                    "frontend_whitelist_domains": null,
                    "backend_whitelist_domains": null,
                    "working_hours_toggle": "0",
                    "special_holidays": "[]",
                    "show_only_custom_plan": null,
                    "chat_messages_language": "en-US",
                    "show_visitor_ip_mask": null,
                    "allow_event_track": null,
                    "supbot_title_on_button": "Chat with agent",
                    "supbot_default_answer": "Sorry, I am still learning and I can not answer this query right now. want to chat with our one of executive?",
                    "supbot_chat_transfer_event": "Your chat is transferring with our one of the agents, agent will be with you shortly...",
                    "supbot_commontalk_toggle": "0",
                    "force_single_thread": "1",
                    "cobrowse_force_drawing": "0",
                    "supbot_always_transfer_chat": "1",
                    "trigger_invite_heading": "",
                    "launcher_vibration": "1",
                    "supbot_page_redirect_event": "Let me redirect you to the specific page.",
                    "supbot_response_on_short_msg": "Hi there!",
                    "video_recording": "0",
                    "chat_session_mode": "0",
                    "privacy_link_mode": "0",
                    "privacy_link_url": null,
                    "company_logo": "cp15319948617390.png",
                    "co_browsing_disable_text_field": null,
                    "co_browsing_whitelist_domains": null,
                    "disable_help_chat_widget": "1",
                    "language_backend": "en-US",
                    "disable_powered_by": "0",
                    "cobrowse_disabled_view": "",
                    "cobrowse_disabled_input_field": "",
                    "cobrowse_disable_proxy": "0",
                    "cobrowse_show_url_bar": "1",
                    "cobrowse_show_drawing_controls_to_visitor": "1",
                    "email_piping": "{\"status\":\"disabled\",\"value\":\"\"}",
                    "cobrowse_record_session": "0",
                    "chat_feedback_text": "0",
                    "supbot_quick_current_bot_id": "1",
                    "cobrowse_ask_permission": "1",
                    "supbot_quick_current_status": "finished",
                    "disable_file_upload": "0 ",
                    "newsletter_tracker": "2021-02-10",
                    "prevent_server_side_cobrowsing": "0",
                    "disable_file_upload_frontend": "0",
                    "cobrowse_disable_iframes": "0",
                    "offline_visitor_mail_visibility": "off",
                    "offline_chat_mail_transcript_visibility": "off",
                    "security_files_permissions": null,
                    "supbot_feedback_flag": "0",
                    "supbot_feedback_down_suggestion": "0",
                    "supbot_feedback_down_transfer": "0",
                    "quick_links": null,
                    "show_visitor_start_cobrowse_button": "0",
                    "profile_access_level": "0",
                    "supbot_suggestion_bubble": "0",
                    "request_recording_files": null,
                    "web_spell_checker": "1",
                    "cobrowse_domains": null,
                    "home_card_ids": null,
                    "supbot_front_suggestion_bubble": "1",
                    "queue_threshold": "0",
                    "supbot_noreply_autopush_suggestion": "1",
                    "offline_data_collect_delay": "1",
                    "show_audio_call_button": "1",
                    "show_video_call_button": "1",
                    "show_start_chat_button": "1",
                    "show_view_chat_button": "1",
                    "widget_bottom_spacing": "0",
                    "widget_side_spacing": "0",
                    "app_data_request_flow_timeout": "30",
                    "clearbit_status": "inactive",
                    "supbot_default_lang_filter": "all",
                    "issue_reason_name": "",
                    "request_chat_csv_files": null,
                    "audit_log": "0",
                    "show_home_agent_avatars": "1",
                    "widget_dark_theme": "1",
                    "company_logo_meta_data": null,
                    "offline_visitor_mail_body": null,
                    "disable_canvas_support": "0",
                    "disable_svg_support": "0",
                    "disable_dynamic_css_support": "0",
                    "disable_css_based_hover_events_support": "0",
                    "hide_cobrowse_widget_after_chat_closed": "0",
                    "transcript_sender_mail": "no-reply@acquire.io",
                    "disable_visitor_search_box": "0",
                    "exclude_agents_from_recording": "",
                    "agent_default_call_pick_type": "auto",
                    "auto_minimize_chat_media_calls": "0",
                    "simple_dashboard_ui": "0",
                    "disable_urlbar_agent": "0",
                    "delete_chat_on_close": "0",
                    "integration_autosuggestion_enable": "1",
                    "integration_autosuggestion_value": "Salesforce",
                    "enable_billing_cycle_change": "0",
                    "client_log_track": null,
                    "auto_start_slient_cobrowse": "0",
                    "silent_cobrowse_button": "0",
                    "visitor_new_chat_notification": "1",
                    "visitor_new_chat_sound": "1",
                    "visitor_new_msg_notification": "1",
                    "visitor_new_msg_sound": "1",
                    "enable_smtp_setting": "0",
                    "smtp_status": null,
                    "smtp_setting": null,
                    "supbot_allowed_bunches": "1",
                    "supbot_automated_emojis": "1",
                    "check_ssn": "0",
                    "social_security_number": "",
                    "allow_profile_view": null,
                    "encryption_key": null,
                    "department_access_level": "0",
                    "supbot_stop_greeting_repetition": "0",
                    "oneway_audio_video_support": "0",
                    "enable_two_factor_auth": "0",
                    "request_qna_export": null,
                    "show_billing_invoices": "0",
                    "enable_dashboard_view_change": "0",
                    "open_link_new_tab_cobrowse": "0",
                    "request_analytics_export": null,
                    "transcript_analytics_mail": "elijah.ilondior@zenithbank.com,omoadoni.imoukhuede@zenithbank.com,ngozi.ayeke@zenithbank.com,oyeyemi.ogunsanya@zenithbank.com",
                    "hide_emoji_button_in_widget": "0",
                    "hide_emoji_button_in_dashboard": "0",
                    "show_queued_chats": null,
                    "show_other_active_chats": null,
                    "offline_form_agent_offline_transfer_from_bot": "0",
                    "allow_user_multiple_login_attempts": null,
                    "disable_platform_access": "0",
                    "request_general_analytics_export": null,
                    "chat_export_report_profile ": null,
                    "request_profiles_analytics_export": null,
                    "request_chat_bot_analytics_export": null,
                    "request_users_analytics_export": null,
                    "request_others_analytics_export": null,
                    "feedback_questions": [],
                    "timezone_offset": "+01:00",
                    "timezone_offset_decimal": "+1"
                },
                "agents": [{
                    "id": 26254,
                    "first_name": "Admin",
                    "last_name": "",
                    "photo": "pp15318445235961.png",
                    "meta_field": "{\"next_step\":\"info\",\"user_for\":\"sales\",\"company_name\":\"\",\"signup_plan\":null}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 29260,
                    "first_name": "Ngozi",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"0\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 29263,
                    "first_name": "Olachi",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"0\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 29265,
                    "first_name": "Emmanuella",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"0\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 37465,
                    "first_name": "Romie",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 38305,
                    "first_name": "Muna",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 38886,
                    "first_name": "Boluwatife",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 42029,
                    "first_name": "Oyeyemi",
                    "last_name": "",
                    "photo": "pp17247567723080.png",
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 42071,
                    "first_name": "Itoro",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 74674,
                    "first_name": "Ese",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 74983,
                    "first_name": "Modupe",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76255,
                    "first_name": "Uche",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76257,
                    "first_name": "Kunal",
                    "last_name": "",
                    "photo": null,
                    "meta_field": null,
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76263,
                    "first_name": "Blessing",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76267,
                    "first_name": "Powei",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76272,
                    "first_name": "Uchechi",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76274,
                    "first_name": "Chiamaka",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76279,
                    "first_name": "Victory",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76283,
                    "first_name": "Ndukeabasi",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76285,
                    "first_name": "Jelil",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76286,
                    "first_name": "Kazeem",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76290,
                    "first_name": "Omo",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76291,
                    "first_name": "Udoka",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76294,
                    "first_name": "Innocent",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76295,
                    "first_name": "Hope",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76298,
                    "first_name": "Emmanuel",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76299,
                    "first_name": "Esther",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76300,
                    "first_name": "Moses",
                    "last_name": "",
                    "photo": "",
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76301,
                    "first_name": "Oluwadamilola",
                    "last_name": null,
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76303,
                    "first_name": "EstherN",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76304,
                    "first_name": "Michael",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76305,
                    "first_name": "Segun",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76306,
                    "first_name": "Fidelia",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76307,
                    "first_name": "Ayomide",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76308,
                    "first_name": "Ginika",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76310,
                    "first_name": "Lynda",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }, {
                    "id": 76312,
                    "first_name": "Yvonne",
                    "last_name": "",
                    "photo": null,
                    "meta_field": "{\"new_agent\":\"1\"}",
                    "status": "offline",
                    "department_name": "",
                    "departments": [],
                    "push_notifications": false
                }],
                "tags": {
                    "194184": "Account- Disputed Charges",
                    "194185": "Account- Transaction Confirmation",
                    "194186": "Account Opening",
                    "194187": "Account and Balance Enquiries",
                    "194188": "Agency Banking",
                    "194189": "Failed Bills Payment- All Channels",
                    "194190": "Alertz Complaints & Enquiries",
                    "194191": "ATM/POS/WEB Disputes",
                    "194192": "Branches",
                    "194193": "BVN & Account Update",
                    "194194": "Card Requests & General card enquiries",
                    "194195": "Card Usage Challenge & Enquiries",
                    "194196": "Corporate Ibank: Enquiries/Transaction/Login Chall",
                    "194197": "Customer Requests/Enquiries/Instructions",
                    "194198": "Customer Service",
                    "194199": "Faulty POS Report/POS Settlement Complaints",
                    "194200": "General Enquiries on Products/Services",
                    "194201": "Hardware/E-Token Enquiries",
                    "194202": "Hardware/E-Token Unlock/ PIN Reset",
                    "194204": "Internet Banking: Enquiries/Transaction/Login Chal",
                    "194205": "Loan",
                    "194207": "Mobile Banking- Unauthorized Transaction",
                    "194208": "Mobile Banking- Enquiries/Transaction/Login Challe",
                    "194209": "NIP/NEFT- Transfer Challenge & Non-Receipt",
                    "194210": "Promotion",
                    "194211": "Quickteller Transfers",
                    "194212": "Scan-To-Pay",
                    "194213": "Staff Attitude & Branch Service Delivery",
                    "194214": "USSD Banking(*966#)- Enquiries/Transaction/Login",
                    "194216": "USSD Banking- Unauthorized Transactions",
                    "194221": "Fraud report",
                    "194240": "Statement",
                    "195204": "Failed Airtime - All Channels",
                    "195205": "Transfer Limit Increase",
                    "195206": "Alertz Modification",
                    "195207": "ZIVA",
                    "195208": "Statement Request",
                    "195209": "BVN DETAILS",
                    "195218": "NUBAN ENQUIRY",
                    "195237": "CGATE TRANSACTIONS",
                    "195338": "general",
                    "195339": "card",
                    "195340": "tok",
                    "195341": "loa",
                    "195342": "cardv",
                    "195343": "uss",
                    "195345": "Mobile Banking - Password Reset",
                    "195346": "accoum",
                    "195347": "corp",
                    "195348": "toke",
                    "195349": "CAREER",
                    "195350": "geb",
                    "195351": "opay",
                    "195352": "account restriction",
                    "195353": "Form A",
                    "195354": "po",
                    "195355": "dro",
                    "195356": "sav",
                    "195357": "air",
                    "195358": "prom",
                    "195359": "mobile app",
                    "195360": "alert",
                    "195361": "account statement",
                    "195362": "bill",
                    "195363": "deac",
                    "195364": "Account Status",
                    "195365": "Zenith Easy Wallet",
                    "195366": "mpo",
                    "195367": "upgrade",
                    "195368": "dollar",
                    "195369": "satement",
                    "195370": "otp",
                    "195371": "mastercard",
                    "195372": "erronoues tranfer",
                    "195373": "agent",
                    "195374": "etoken reactivation",
                    "195375": "accont reactivation",
                    "195376": "limiy",
                    "195377": "age",
                    "195378": "inter",
                    "195379": "offshore transfer",
                    "195380": "fra",
                    "195381": "AG",
                    "195382": "frau",
                    "195383": "cheque",
                    "195384": "no",
                    "195385": "dis",
                    "195386": "charge",
                    "195387": "mobile",
                    "195388": "limit",
                    "195389": "bala",
                    "195390": "accc",
                    "195391": "car",
                    "195392": "rele",
                    "195393": "usd",
                    "195394": " mobile",
                    "195395": "numb",
                    "195396": "JOB",
                    "195397": "FX transfer",
                    "195398": "account balan",
                    "195399": "mn",
                    "195400": "fraudulent",
                    "195401": "device removal",
                    "195402": "cor",
                    "195403": "CLOSED ACCOUNT",
                    "195404": "branch",
                    "195405": "erroneous airtime",
                    "195406": "alertz",
                    "195407": "geneatm",
                    "195408": "mno",
                    "195409": "airtime",
                    "195410": "open",
                    "195411": "gwv",
                    "195412": "care",
                    "195413": "alrt",
                    "195414": "neft",
                    "195415": "bank statement",
                    "195416": "account number.",
                    "195417": "cui",
                    "195418": "inte",
                    "195419": "fail",
                    "195420": "load",
                    "195421": "ETOKE",
                    "195422": "tra",
                    "195423": "ai",
                    "195424": "etokem",
                    "195425": "fund onhold",
                    "195426": "bal",
                    "195427": "ib",
                    "195428": "etok",
                    "195429": "thank",
                    "195430": "SWIFT / SORT CODE ",
                    "195431": "frsud",
                    "195432": "etk",
                    "195433": "erroneous transfer",
                    "195434": "/g",
                    "195435": "release funds on hold",
                    "195436": "nin",
                    "195437": "online transaction",
                    "195438": "remita payment",
                    "195439": "indemnity form",
                    "195440": "treasury news",
                    "195441": "diaspora",
                    "195442": "email address",
                    "195443": "dollar card",
                    "195444": "loanm",
                    "195445": "account transfers",
                    "195446": "Mobile Banking- Device removal",
                    "195447": "up",
                    "195448": "aler",
                    "195449": "update",
                    "195450": "UPDA",
                    "195451": "NIN & Account Update",
                    "195452": "fgen",
                    "195453": "form m",
                    "195454": "nim",
                    "195455": "MASTER CARD DEACTIVATION",
                    "195456": "recal",
                    "195457": "tokem",
                    "195458": "lo",
                    "195459": "greetings",
                    "195460": "FAILED",
                    "195461": "Dormant Account",
                    "195462": "investment",
                    "195463": "customer",
                    "195465": "n8in",
                    "195466": "scam",
                    "195467": "stata",
                    "195468": "recruitment",
                    "195469": "diputed charges",
                    "195470": "greet",
                    "195471": "mobile app pin reset",
                    "195472": "account nuber",
                    "195473": "maste",
                    "195475": "a1",
                    "195476": "accoujnt reactijva",
                    "195477": "account nubmner",
                    "195478": "ghene",
                    "195479": "pass",
                    "195480": "acount",
                    "195481": "deb",
                    "195482": "interbank transfers",
                    "195483": "gerne",
                    "195484": "Treasure Bills",
                    "195485": "rto",
                    "195486": "ni",
                    "195487": "ERRONEOUS",
                    "195488": "dollar rate",
                    "195489": "LOCKED ACCOUNT",
                    "195490": "e-",
                    "195491": "cuas",
                    "195492": "business gone bad",
                    "195493": "MOBIE",
                    "195494": "account opeming",
                    "195495": "scamn",
                    "195496": "pas",
                    "195497": "mo",
                    "195498": "balance",
                    "195499": "NIP- Recall",
                    "195500": "hardware",
                    "195501": "over",
                    "195502": "mpm",
                    "195503": "statements",
                    "195504": "telex copy",
                    "195505": "pospos",
                    "195506": "bvb",
                    "195507": "mobu",
                    "195508": "incre",
                    "195509": "card re",
                    "195510": "sponsrship",
                    "195511": "iban number",
                    "195512": "save4me inquires",
                    "195513": "mobile app reactivation",
                    "195514": "quic",
                    "195515": "Account reactivation.",
                    "195516": "jobs",
                    "195517": "gret",
                    "195518": "toe",
                    "195519": "faild",
                    "195520": "cut",
                    "195521": "quickteller transaction",
                    "195522": "e-toke",
                    "195523": "una",
                    "195524": "agenc",
                    "195525": "bills payment",
                    "195526": "fails",
                    "195527": "transfer",
                    "195528": "trade service",
                    "195529": "account restriction.",
                    "195530": "mob limit",
                    "195531": "account res",
                    "195532": "led",
                    "195533": "nips",
                    "195534": "unsolicited",
                    "195535": "cl",
                    "195536": "global pay",
                    "195537": "Mobile banking - Pin reset",
                    "195538": "tokern",
                    "195539": "interest",
                    "195540": "ky",
                    "195541": "ETOKEN REQUEST",
                    "195542": "account reactijvation",
                    "195543": "unauthorized transaction",
                    "195544": "sess",
                    "195545": "SME",
                    "195546": "DOMICILLIARY",
                    "195547": "pension",
                    "195548": "bnv",
                    "195549": "FAILED BILLS",
                    "195550": "alart",
                    "195551": "customers",
                    "195552": "unauthorised debit ",
                    "195553": "poa",
                    "195554": "upgade",
                    "195555": "satement of account",
                    "195556": "bank st",
                    "195557": "upd",
                    "195558": "Please be informed that the bank only ugh her Human Resources Department. Also, all resumes and other requested information should be uploaded on the careers page at www.zenithbank.com, All other recruitment-related enquiries may be channeled to hr@zenith",
                    "195559": "dev",
                    "195560": "op",
                    "195561": "hardwar",
                    "195562": "INFLOW",
                    "195563": "erroneoues",
                    "195564": "swit",
                    "195565": "change",
                    "195566": "restr",
                    "195568": "/gre",
                    "195569": "fund",
                    "195570": "nef",
                    "195571": "unknown",
                    "195572": "hardw",
                    "195573": "dor",
                    "195574": "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    "195575": "biometric",
                    "195576": "data",
                    "195577": "lkoan",
                    "195578": "account uograde",
                    "195579": "drophold",
                    "195580": "fraud airtime",
                    "195581": "CG",
                    "195582": "NURBAN",
                    "195583": "caree",
                    "195584": "VERITAS",
                    "195585": "custome",
                    "195586": "bvnm",
                    "195587": "bills",
                    "195588": "mastercard transaction",
                    "195589": "sort",
                    "195590": "dstv",
                    "195591": "con",
                    "195592": "VIR",
                    "195593": "nip erroneous",
                    "195594": "c",
                    "195595": "bic",
                    "195596": "card pin reset",
                    "195597": "stol",
                    "195598": "non",
                    "195599": "mo b",
                    "195600": "device",
                    "195601": "transac",
                    "195602": "token unlock",
                    "195603": "upgrade of account",
                    "195604": "sor",
                    "195605": "Corporate Ibank: Hardware Token Unlock",
                    "195606": "routing number",
                    "195607": "transfer recall",
                    "195608": "gene",
                    "195609": "E-Naira",
                    "195610": "whitlisting ",
                    "195611": "account reve",
                    "195612": "gee",
                    "195613": "pasword reset",
                    "195614": "e-token reactivation",
                    "195615": "on hold",
                    "195616": "funds",
                    "195617": "share",
                    "195618": "mobi",
                    "195619": "subsidiary",
                    "195620": "fixed",
                    "195621": "account open",
                    "195622": "Scheduled payment",
                    "195623": "ZENITH SHARES ",
                    "195624": "sh",
                    "195625": "fa",
                    "195626": "swif",
                    "195627": "card deac",
                    "195628": "bypass",
                    "195629": "inves",
                    "195630": "drop of hol",
                    "195631": "Proposal",
                    "195632": "Mobile Banking - Reactivation",
                    "195633": "gus",
                    "195634": "LOST CARD",
                    "195635": "stat",
                    "195636": "prudential zenith",
                    "195637": "account locked",
                    "195638": "agen",
                    "195639": "interest rate",
                    "195640": "zenith",
                    "195641": "fixed account",
                    "195642": "ah",
                    "195643": "shar",
                    "195644": "mobile do",
                    "195645": "nub",
                    "195646": "zem",
                    "195647": "reativation",
                    "195648": "laom",
                    "195649": "niop",
                    "195650": "ax",
                    "195651": "s",
                    "195652": " loan",
                    "195653": "invest",
                    "195654": "mobile application",
                    "195655": "oa",
                    "195656": "bil",
                    "195657": "LOST TOKEN",
                    "195658": "NU",
                    "195659": "sares",
                    "195660": "BIC DETAILS",
                    "195661": "upgraded",
                    "195662": "opened",
                    "195663": "shaes",
                    "195664": "ledger",
                    "195665": "account numbrer",
                    "195666": "+account number",
                    "195667": "upgrasd",
                    "195668": "tokr",
                    "195669": "billing address",
                    "195670": "failed bills payment",
                    "195671": "cud",
                    "195672": "lLOAN",
                    "195673": "at",
                    "195674": "aletz",
                    "195675": "fradu",
                    "195676": "fruadulent",
                    "195677": "treasury",
                    "195678": "rate",
                    "195679": "zenith sh",
                    "195680": "muy",
                    "195681": "nip funds on hold",
                    "195682": "etoken unlock",
                    "195683": "usds",
                    "195684": "account limit",
                    "195685": "ugrade",
                    "195686": "USDD",
                    "195687": "openin",
                    "195688": " BVN",
                    "195689": "virt",
                    "195690": "card withdrawals",
                    "195691": "ciu",
                    "195692": "hree",
                    "195693": "nipo",
                    "195694": "ibank",
                    "195695": "pin",
                    "195696": "gwene",
                    "195697": "ahres",
                    "195698": "phcn",
                    "195699": "VIP",
                    "195700": "casrd",
                    "195701": "mo0",
                    "195702": "aty",
                    "195703": "ca",
                    "195704": "a",
                    "195705": "sat",
                    "195706": "card u",
                    "195707": "Kindly be informed that a token is required to register a new device  for mobile banking if you already have  an active device profiled. you can request for the hardware token which cost 2500 at any of our branches or you can as well download an e-token a",
                    "195708": "tokn",
                    "195709": "zi",
                    "195710": "I made a mistake in the earlier chat, my account number 22753879",
                    "195711": "virtual  card",
                    "195712": "fradulent",
                    "195713": "failed airt",
                    "195714": "limit increase",
                    "195716": "acconut number",
                    "195717": "failed bill payment",
                    "195718": "pppos",
                    "195719": "gn",
                    "195720": "balan",
                    "195721": "mmo",
                    "195722": "disabled token",
                    "195723": "Kindly visit genthe branch or contact your c",
                    "195724": "bvnbvn",
                    "195725": "erroenous",
                    "195726": "et",
                    "195727": "accout",
                    "195728": "account nu",
                    "195729": "limi",
                    "195730": "fau",
                    "195731": "faile",
                    "195732": "/gr",
                    "195733": "carr",
                    "195734": "o",
                    "195735": "nip ererro",
                    "195736": "movi",
                    "195737": "genip",
                    "195738": "acco",
                    "195739": "tranfer limit increase",
                    "195740": "intrest",
                    "195741": "account",
                    "195742": "GENEN",
                    "195743": "jo",
                    "195744": "vud",
                    "195745": "card d"
                },
                "departments": {},
                "translated_message": {
                    "node": {
                        "Choose Department": "Choose Department",
                        "Close": "Close",
                        "Disconnected": "Disconnected",
                        "retry in {retry_in} secs": "retry in {retry_in} secs",
                        "Trying to reconnect...": "Trying to reconnect...",
                        "{time} hours ago": "{time} hours ago",
                        "just now": "just now",
                        "VOIP Call": "VOIP Call",
                        "Messages": "Messages",
                        "Notification": "Notification",
                        "Chats": "Chats",
                        "{num} New chat request is there !": "{num} New chat request is there !",
                        "Click notification to attend this chat.": "Click notification to attend this chat.",
                        "Another session just activated, so to get this session, back reload the page.": "Another session just activated, so to get this session, back reload the page.",
                        "Session Conflict": "Session Conflict",
                        "Active Chats": "Active Chats",
                        "Live Monitoring": "Live Monitoring",
                        "Pending Chats": "Pending Chats",
                        "Online Visitors": "Online Visitors",
                        "USER ID": "USER ID",
                        "How long the user has been online in their most recent session": "How long the user has been online in their most recent session",
                        "Every visitor has a ID or a ‘Name’ if stored": "Every visitor has a ID or a ‘Name’ if stored",
                        "USER INFO": "USER INFO",
                        "TAGS": "TAGS",
                        "Total number of previous chats": "Total number of previous chats",
                        "Location and device information": "Location and device information",
                        "ONLINE SINCE": "ONLINE SINCE",
                        "The current page the user is on": "The current page the user is on",
                        "PAGE TRACK": "PAGE TRACK",
                        "Start Chat": "Start Chat",
                        "Which URL the user has come from": "Which URL the user has come from",
                        "HISTORY": "HISTORY",
                        "SOURCE": "SOURCE",
                        "Tags from agents": "Tags from agents",
                        "AGENTS": "AGENTS",
                        "Agents who are speaking to the customer": "Agents who are speaking to the customer",
                        "Print Transcript": "Print Transcript",
                        "Phone": "Phone",
                        "Redirect user to another url": "Redirect user to another url",
                        "Tags": "Tags",
                        "Co-Browsing": "Co-Browsing",
                        "Browsing History": "Browsing History",
                        "Interact with your customers web screen": "Interact with your customers web screen",
                        "Invite agent to conversation.": "Invite agent to conversation.",
                        "Invite": "Invite",
                        "Use https for WebRTC": "Use https for WebRTC",
                        "Share My Screen": "Share My Screen",
                        "Open Chat": "Open Chat",
                        "Enter a message": "Enter a message",
                        "Send mail": "Send mail",
                        "Block User": "Block User",
                        "Mail Transcript": "Mail Transcript",
                        "Profile": "Profile",
                        "Notes": "Notes",
                        "Browser & Software": "Browser & Software",
                        "Currently on :": "Currently on :",
                        "Name": "Name",
                        "Details": "Details",
                        "Remarks": "Remarks",
                        "Browser / OS": "Browser / OS",
                        "Save to CRM": "Save to CRM",
                        "IP": "IP",
                        "Wifi Connection": "Wifi Connection",
                        "Excellent": "Excellent",
                        "Current Page": "Current Page",
                        "Title": "Title",
                        "Save Note": "Save Note",
                        "Delete Note": "Delete Note",
                        "Chat": "Chat",
                        "see your customer screen, or share your screen": "see your customer screen, or share your screen",
                        "Screen Share": "Screen Share",
                        "Invite agent": "Invite agent",
                        "Minimize": "Minimize",
                        "Request Screen Sharing": "Request Screen Sharing",
                        "No results": "No results",
                        "Search Tags": "Search Tags",
                        "Add": "Add",
                        "Request User Screen": "Request User Screen",
                        "Click here": "Click here",
                        "Webrtc is not supported.": "Webrtc is not supported.",
                        "No users in chat, or visitor has just closed chat.": "No users in chat, or visitor has just closed chat.",
                        "to install screen sharing extension.": "to install screen sharing extension.",
                        "just joined this chat.": "just joined this chat.",
                        "Powered by": "Powered by",
                        "Send": "Send",
                        "only a few seconds": "only a few seconds",
                        "Your chat is on wait, agent will pick chat soon.": "Your chat is on wait, agent will pick chat soon.",
                        "Answer Chat": "Answer Chat",
                        "unseen": "unseen",
                        "seen": "seen",
                        "Are you sure to close this chat? {br} You won't be able to open it again.": "Are you sure to close this chat? {br} You won't be able to open it again.",
                        "Webrtc is not supported for {user_name}": "Webrtc is not supported for {user_name}",
                        "Voice Call": "Voice Call",
                        "Video Call": "Video Call",
                        "Track User": "Track User",
                        "Invite guests": "Invite guests",
                        "There are no online visitor": "There are no online visitor",
                        "Your personal test page already has your widget set-up for you ready to go! See see how Acquire can deliver value for you!": "Your personal test page already has your widget set-up for you ready to go! See see how Acquire can deliver value for you!",
                        "Your Personal Test Page": "Your Personal Test Page",
                        "{time} min ago": "{time} min ago",
                        "{time} seconds": "{time} seconds",
                        "Total Visitor online": "Total Visitor online",
                        "All the chat started by customer and not pick by agents.": "All the chat started by customer and not pick by agents.",
                        "Queue": "Queue",
                        "Chat In": "Chat In",
                        "Chats that are being currently handled by agents.": "Chats that are being currently handled by agents.",
                        "Since {time}": "Since {time}",
                        "Currently active agents.": "Currently active agents.",
                        "Pending Chat": "Pending Chat",
                        "All the chat started by customer and not answer by agents or close by customer before answer by agent.": "All the chat started by customer and not answer by agents or close by customer before answer by agent.",
                        "The response time of the chats will count the total chats picked by the agent against the total time if took to answer all chats": "The response time of the chats will count the total chats picked by the agent against the total time if took to answer all chats",
                        "Total number of online visitors": "Total number of online visitors",
                        "Total Active chat": "Total Active chat",
                        "Pending": "Pending",
                        "The waiting time of the chats are pending or queue.": "The waiting time of the chats are pending or queue.",
                        "Chat time": "Chat time",
                        "Longest": "Longest",
                        "Average": "Average",
                        "Live waiting time": "Live waiting time",
                        "Agent": "Agent",
                        "Online": "Online",
                        "Offline": "Offline",
                        "Total number of chats picked by agents.": "Total number of chats picked by agents.",
                        "Active Chat": "Active Chat",
                        "Live Agent": "Live Agent",
                        "Response time": "Response time",
                        "Total Missed Chat": "Total Missed Chat",
                        "The time of chats started by customer before agent pick-up.": "The time of chats started by customer before agent pick-up.",
                        "Chat Drop off time": "Chat Drop off time",
                        "WORSE": "WORSE",
                        "BAD": "BAD",
                        "FAIR": "FAIR",
                        "LIKE IT": "LIKE IT",
                        "LOVE IT": "LOVE IT",
                        "Support team": "Chat with us",
                        "Select Voip number": "Select Voip number",
                        "Number e.g. {number}": "Number e.g. {number}",
                        "Call Customer": "Call Customer",
                        "Open Keypad": "Open Keypad",
                        "{time} days ago": "{time} days ago",
                        "typing": "typing",
                        "New chat request is there !": "New chat request is there !",
                        "Current Chat": "Current Chat",
                        "Nobody sharing screen.": "Nobody sharing screen.",
                        "Request Co-Browse Session": "Request Co-Browse Session",
                        "Request User Co-Browse": "Request User Co-Browse",
                        "Are you sure to disconnect from cobrowsing?": "Are you sure to disconnect from cobrowsing?",
                        "just closed this chat.": "just closed this chat.",
                        "{num} new messages !": "{num} new messages !",
                        "Nobody else in call.": "Nobody else in call.",
                        "{call_type} Call with {call_from}": "{call_type} Call with {call_from}",
                        "video": "video",
                        "We've got it. Thanks for feedback.": "We ve got it. Thanks for the feedback.",
                        "Please be patient, one of our agents will connect with you shortly.": "Please be patient, one of our agents will connect with you shortly.",
                        "Do you really want to block this user?": "Do you really want to block this user?",
                        "We have blacklisted this user. you will no more receive chat request from this user.": "We have blacklisted this user. you will no more receive chat request from this user.",
                        "Incoming {call_type} call from {call_from}": "Incoming {call_type} call from {call_from}",
                        "Reject": "Reject",
                        "Answer as Voice Call": "Answer as Voice Call",
                        "Would you like to join and talk (optional).": "Would you like to join and talk (optional).",
                        "CONVERSATION": "CONVERSATION",
                        "Start Conversation": "Start Conversation",
                        "New Conversation": "New Conversation",
                        "Save to Profiles": "Save to Profiles",
                        "Url copied to your clipboard": "Url copied to your clipboard",
                        "Please enter email": "Please enter email",
                        "Server Error, Please try again": "Server Error, Please try again",
                        "Uploading": "Uploading",
                        "Outgoing {call_type} call": "Outgoing {call_type} Call",
                        "Please wait while agent pick call.": "Please hold for Agent.",
                        "User don't want to have a call from you.": "User has declined the call.",
                        "audio": "audio",
                        "Full screen mode activated.": "Full screen mode activated.",
                        "EXIT": "EXIT",
                        "You are about to close this conversation.": "You are about to close this conversation.",
                        "Get notified": "Get notified",
                        "Email": "Email",
                        "TERRIBLE": "TERRIBLE",
                        "{time} months ago": "{time} months ago",
                        "Would you like to allow agent to CoBrowse with you?": "Would you like to allow agent to CoBrowse with you?",
                        "You are about to end the co-browsing session.": "You are about to end the co-browsing session.",
                        "Live Statistics": "Live Statistics",
                        "Your screen is sharing with agent.": "Your screen is sharing with agent.",
                        "Stop Sharing": "Stop Sharing",
                        "This call is being recorded for quality and monitoring purpose.": "This call is being recorded for quality and monitoring purpose.",
                        "and Phone": "and Phone",
                        "Co-Browsing Connected": "Co-Browsing Connected",
                        "Neutral": "Neutral",
                        "Very Unsatisfied": "Very Unsatisfied",
                        "Satisfied": "Satisfied",
                        "Unsatisfied": "Unsatisfied",
                        "Very Satisfied": "Very Satisfied",
                        "Save": "Save",
                        "Powered by {powered_by}": "Powered by {powered_by}",
                        "from": "from",
                        "Answer as Video Call": "Answer as Video Call",
                        "Cobrowse request": "Cobrowse request",
                        "Allow screen share": "Allow screen share",
                        "Text Chat": "Text Chat",
                        "Audio Call": "Audio Call",
                        "Start Video Call": "Start Video Call",
                        "Start Audio Chat": "Start Audio Chat",
                        "Start Text Chat": "Start Text Chat",
                        "Please allow access to webcam.": "Please allow access to webcam.",
                        "Please allow access to screen sharing or might be your browser is not supported for screen sharing.": "Please allow access to screen sharing or might be your browser is not supported for screen sharing.",
                        "Please allow access your microphone and speaker.": "Please allow access your microphone and speaker.",
                        "Screen can't be captured.": "Screen can't be captured.",
                        "User denied": "User denied",
                        "This browser is not supported for screen sharing.": "This browser is not supported for screen sharing.",
                        "Install Chrome Extension": "Install Chrome Extension",
                        "Open Apppstore": "Open Apppstore",
                        "Screen sharing permissions denied.": "Screen sharing permissions denied.",
                        "Please allow screen sharing access": "Please allow screen sharing access",
                        "Notifications": "Notifications",
                        "Voice calls": "Voice calls",
                        "No active chats": "No active chats",
                        "Disconnected, Trying to connect again.": "Disconnected, Trying to connect again.",
                        "You have another session open. Refresh your page to get back to Acquire.": "You have another session open. Refresh your page to get back to Acquire.",
                        "Conflicting sessions": "Conflicting sessions",
                        "Co-browsing code or URL": "Co-browsing code or URL",
                        "Your personal test page already has your widget ready to go. Let’s see how Acquire can drive value for you.": "Your personal test page already has your widget ready to go. Let’s see how Acquire can drive value for you.",
                        "Connect": "Connect",
                        "There are no online visitors right now.": "There are no online visitors right now.",
                        "Your plan do not support this feature. Please Upgrade the plan.": "Your plan do not support this feature. Please Upgrade the plan.",
                        "Source": "Source",
                        "  Chat Transfer": "  Chat Transfer",
                        "  Invite": "  Invite",
                        "You are about to close this conversation. Are you sure you want to continue?": "You are about to close this conversation. Are you sure you want to continue?",
                        "Confirm closing chat": "Confirm closing chat",
                        "Your live statistics": "Your live statistics",
                        "Cancel": "Cancel",
                        "Active chats": "Active chats",
                        "Waiting times": "Waiting times",
                        "Chat drop-off time": "Chat drop-off time",
                        "Chats in": "Chats in",
                        "Total chats": "Total chats",
                        "Missed Chats": "Missed Chats",
                        "Agents": "Agents",
                        "Conference Room": "Conference Room",
                        "Your conversations": "Your conversations",
                        "Incoming {call_type} call": "Incoming {call_type} call",
                        "Decline": "Decline",
                        "Please enter your message.": "Please enter your message.",
                        "Please enter valid phone number.": "Please enter valid phone number.",
                        "Please enter valid email address.": "Please enter valid email address.",
                        "This is required field.": "This is required field.",
                        "Choose from suggested input": "Choose from suggested input",
                        "Please enter your name.": "Please enter your name.",
                        "Search name, phone, email, remarks etc": "Search name, phone, email, remarks etc",
                        "Please wait for a specialist to respond.": "Please wait for a specialist to respond.",
                        "File attached": "File attached",
                        "New conversations": "New conversations",
                        "Search for answers...": "Search for answers...",
                        "Crush your number with Custom Bots": "Crush your number with Custom Bots",
                        "Register for webinar": "Register for webinar",
                        "days ago": "days ago",
                        "Find an answer quickly": "Find an answer quickly",
                        "Typically replies in a few hours": "Typically replies in a few hours",
                        "Back to list": "Back to list",
                        "Minimize window": "Minimize window",
                        "{time} minutes": "{time} minutes",
                        "Submit": "Submit",
                        "You": "You",
                        "Help Center": "Help Center",
                        "This section is not visible at agent side.": "This section is not visible at agent side.",
                        "Unread messages": "Unread messages",
                        "Agents are offline": "Agents are offline",
                        "no agents are available at the moment.": "no agents are available at the moment.",
                        "Call end": "Call end",
                        "Mute": "Mute",
                        "Turn Camera Off": "Turn Camera Off",
                        "Popup mode": "Popup mode",
                        "Call layout and settings": "Call layout and settings",
                        "Widget mode": "Widget mode",
                        "Please input something.": "Please input something.",
                        "Agent has offered you to upgrade": "Agent has offered you to upgrade",
                        "Speak through your computer.": "Speak through your computer.",
                        "Video": "Video",
                        "Audio": "Audio",
                        "Video call through your computer": "Video call through your computer",
                        "Agent has offered you to make a call": "Agent has offered you to make a call",
                        "Support": "Support",
                        "You will be notified soon. Stay with us!": "You will be notified soon. Stay with us!",
                        "Visitor disallowed your request.": "Visitor disallowed your request.",
                        "Your chat is transferring with our one of the agents, agent will be with you shortly...": "Your chat is transferring with our one of the agents, agent will be with you shortly...",
                        "Write a reply…": "Write a reply…",
                        "Visitor declined co-browse request.": "Visitor declined co-browse request.",
                        "Sorry, I am still learning and I can not answer this query right now. want to chat with our one of executive?": "Sorry, I am still learning and I can not answer this query right now. want to chat with our one of executive?",
                        "Start Video Chat": "Start Video Chat",
                        "Thank you for your details.\nWe will get back to you by chat or email. If you have more comment please leave message here.": "Thank you for your details.We will get back to you by chat or email. If you have more comment please leave message here.",
                        "There are AHEAD_CHATS chats ahead of you. it will take around AHEAD_TIME.": "There are AHEAD_CHATS chats ahead of you. it will take around AHEAD_TIME.",
                        "Support agent typically replies in a few hours.": "Support agent typically replies in a few hours.",
                        "Server Error Occurred, Can't cobrowse anymore.": "Server Error Occurred, Can't cobrowse anymore.",
                        "Send a message…": "Send a message…",
                        "Please click ‘OK’ to begin sharing your screen with the operator.": "Please click ‘OK’ to begin sharing your screen with the operator.",
                        "Privacy Policy": "Privacy Policy",
                        "Let me redirect you to the specific page.": "Let me redirect you to the specific page.",
                        "Hi there!": "Hi there!",
                        "Leave a Message": "Leave a Message",
                        "Anything else to be noted?": "Anything else to be noted?",
                        "Please give this unique cobrowse code to support team so they can access your screen.": "Your unique co-browsing code is give below, give this code to our support staff so they can access and see your screen.",
                        "Co-Browse with our support": "Co-Browse with our support",
                        "How was your conversation with us today?": "How was your conversation with us today?",
                        "How can we serve you better?": "How can we serve you better?",
                        "Please leave your details and we will get back to you.": "Welcome. An executive will attend to you shortly.",
                        "Feedback": "Feedback",
                        "Chat with us": "Chat with us",
                        "Do you want to close feedback survey?": "Do you want to close feedback survey?",
                        "Chat with agent": "Chat with agent",
                        "Ask us anything. We'd love to hear what brought you to here!": "Ask us anything. We'd love to hear what brought you to here!",
                        "Call Me Back Form": "Call Me Back Form",
                        "Choose department": "Choose department",
                        "Email ID": "Email ID",
                        "Enter your message": "Enter your message",
                        "How can we help?": "How can we help?",
                        "Your Name": "Your Name",
                        "Please fill the below detail to making our interaction more closer.": "Please fill the below detail to making our interaction more closer.",
                        "Phone No": "Phone No",
                        "Full name": "Full name",
                        "Your name": "Your name",
                        "Email address": "Email address",
                        "Your email address": "Your email address",
                        "Phone number": "Phone number",
                        "Your phone number": "Your phone number",
                        "End co-browsing session?": "End co-browsing session?",
                        "Please install the following chrome extension to enable screen sharing": "Please install the following chrome extension to enable screen sharing",
                        "email@domain.com": "email@domain.com",
                        "+1 123 456 7890": "+1 123 456 7890",
                        "OK": "OK",
                        "more": "more",
                        "Name, Email  and Phone": "Name, Email  and Phone",
                        "New Message!": "New Message!",
                        "Email  ID": "Email  ID",
                        "Please click `OK` to begin a secure co-browsing session with": "Please click `OK` to begin a secure co-browsing session with",
                        "Swap Camera": "Swap Camera",
                        "Adresse électronique": "Adresse électronique",
                        "How can help fr": "How can help fr",
                        "Choisissez le département": "Choisissez le département",
                        "votre nom": "votre nom",
                        "FR number": "FR number",
                        "Adınız": "Adınız",
                        "Telefon numaran": "Telefon numaran",
                        "View Conversation": "View Conversation",
                        "View conversations": "View conversations",
                        "Invite user to conversation.": "Invite user to conversation.",
                        "Invite user": "Invite user",
                        "Maximize": "Maximize",
                        "Upgrade Visitor Call": "Upgrade Visitor Call",
                        "Track": "Track",
                        "Ask Visitor for Detail": "Ask Visitor for Detail",
                        "Push Visitor Call": "Push Visitor Call",
                        "Pass Details to other application": "Pass Details to other application",
                        "Display form to visitor": "Display form to visitor",
                        "Push To Suggestion": "Push To Suggestion",
                        "Add New Note": "Add New Note",
                        "Created by ": "Created by ",
                        "Show original": "Show original",
                        "Enable / Disable": "Enable / Disable",
                        "Please fill the above detail to making our interaction more closer.": "Please fill the above detail to making our interaction more closer.",
                        "CUSTOMER INFO": "CUSTOMER INFO",
                        "Users who are speaking to the customer": "Users who are speaking to the customer",
                        "Tags from users": "Tags from users",
                        "USERS": "USERS",
                        "Welcome to your dashboard": "Welcome to your dashboard",
                        "documentation": "documentation",
                        "Integrations": "Integrations",
                        "Customize": "Customize",
                        "widget": "widget",
                        "Let’s Go": "Let’s Go",
                        "Preview it first on your personalized test page:": "Preview it first on your personalized test page:",
                        "Sorry, there is no executive is available to pick this chat right now.": "Sorry, there is no executive is available to pick this chat right now.",
                        "No new notifications.": "No new notifications.",
                        "You’re all caught up!": "You’re all caught up!",
                        "No Conversations": "No Conversations",
                        "Get voice calls": "Get voice calls",
                        "View Chat": "View Chat",
                        "You don't have a VoIP subscription": "You don't have a VoIP subscription",
                        "Visitor will enter phone number and agent will call.": "Visitor will enter phone number and agent will call.",
                        "Send Request": "Send Request",
                        "Ask visitor for details": "Ask visitor for details",
                        "Are you sure?": "Are you sure?",
                        "This chat message will be pushed into the suggested section of the Support-Bot.": "This chat message will be pushed into the suggested section of the Support-Bot.",
                        "Please select department.": "Please select department.",
                        "Ask selected fields to visitor": "Ask selected fields to visitor",
                        "Department": "Department",
                        "Auto play not allowed by your browser. So please click play now  button start video.": "Auto play not allowed by your browser. So please click play now  button start video.",
                        "Auto-Play Disabled": "Auto-Play Disabled",
                        "Play Now": "Play Now",
                        "Agents might be busy at this moment, please wait for a little more, we'll attend your call soon.": "Agents might be busy at this moment, please wait for a little more, we'll attend your call soon.",
                        "Just a moment while you’re being connected to your Account Executive.": "Just a moment while you’re being connected to your Account Executive.",
                        "Just a moment while you're connected to your Account Executive.": "Just a moment while you're connected to your Account Executive.",
                        "Tags required": "Tags required",
                        "Tag is required before closing chat.{br} Please add at least one tag and then close chat.": "Tag is required before closing chat.{br} Please add at least one tag and then close chat.",
                        "Turn camera on": "Turn camera on",
                        "Your chat is transferring with our one of the agents, agent will be with you shortly..": "Your chat is transferring with our one of the agents, agent will be with you shortly...",
                        "Coming Soon...": "Coming Soon...",
                        "Please click `OK` to begin sharing your screen with the operator.": "Please click `OK` to begin sharing your screen with the operator.",
                        "आपको जल्द ही सूचित किया जाएगा। हमारे साथ रहें!": "आपको जल्द ही सूचित किया जाएगा। हमारे साथ रहें!",
                        "Please click ‘OK’ to begin a secure co-browsing session with": "Please click ‘OK’ to begin a secure co-browsing session with",
                        "Thank you for your details.We will get back to you by chat or email. If you have more comment please leave message here.": "Thank you for your details.We will get back to you by chat or email. If you have more comment please leave message here.",
                        "How can we serve you better?.": "How can we serve you better?.",
                        "Please fill the below detail": "Please fill the below detail",
                        "Please fill the below detail 66688": "Please fill the below detail 66688",
                        "You will be notified111": "You will be notified111",
                        "You will be notified111222": "You will be notified111222",
                        "Vivek": "Vivek",
                        "vivek2": "vivek2",
                        "You will be notified test 123": "You will be notified test 123",
                        "dnkakdhkaasdadslasdhlasqsqq": "dnkakdhkaasdadslasdhlasqsqq",
                        "Por favor llene el siguiente detalle para hacer que nuestra interacción sea más cercana.": "Por favor llene el siguiente detalle para hacer que nuestra interacción sea más cercana.",
                        "Usted será notificado pronto. ¡Quédate con nosotros!": "Usted será notificado pronto. ¡Quédate con nosotros!",
                        "You will be notified ": "You will be notified ",
                        "Συμπληρώστε τις παρακάτω λεπτομέρειες για να κάνετε την αλληλεπίδρασή μας πιο κοντά.": "Συμπληρώστε τις παρακάτω λεπτομέρειες για να κάνετε την αλληλεπίδρασή μας πιο κοντά.",
                        "Θα ειδοποιηθεί σύντομα. Μείνε μαζί μας!": "Θα ειδοποιηθεί σύντομα. Μείνε μαζί μας!",
                        "You will be notified soon. Stay with us! 123": "You will be notified soon. Stay with us! 123",
                        "Please fill the below detail to making our interaction more closer. 123": "Please fill the below detail to making our interaction more closer. 123",
                        "Hello ABC 123 CD hbnhnhjmk gjghjghj": "Hello ABC 123 CD hbnhnhjmk gjghjghj",
                        "Hello ABC 123 ZEEE66": "Hello ABC 123 ZEEE66",
                        "Bitte füllen Sie das unten stehende Detail aus, um unsere Interaktion enger zu gestalten.": "Bitte füllen Sie das unten stehende Detail aus, um unsere Interaktion enger zu gestalten.",
                        "Sie werden in Kürze benachrichtigt. Bleib bei uns!": "Sie werden in Kürze benachrichtigt. Bleib bei uns!",
                        "以下の内容にご回答ください。": "以下の内容にご回答ください。",
                        "まもなくつながります。少々、お待ちください。": "まもなくつながります。少々、お待ちください。",
                        "Sarai avvisato presto. Resta con noi!": "Sarai avvisato presto. Resta con noi!",
                        "Se preferisce, può indicare i contatti a cui possiamo risponderle.": "Se preferisce, può indicare i contatti a cui possiamo risponderle.",
                        "Complete los detalles a continuación para hacer que nuestra interacción sea más cercana.": "Complete los detalles a continuación para hacer que nuestra interacción sea más cercana.",
                        " Por favor llene el siguiente detalle para hacer que nuestra interacción sea más cercana.": " Por favor llene el siguiente detalle para hacer que nuestra interacción sea más cercana.",
                        "Size yardımcı olabilmemiz için lütfen aşağıdaki formu doldurun.": "Size yardımcı olabilmemiz için lütfen aşağıdaki formu doldurun.",
                        "Yakında bilgilendirileceksiniz. Bizimle kalınız!": "Yakında bilgilendirileceksiniz. Bizimle kalınız!",
                        "กรุณาฝากเบอร์โทรเพื่อให้เจ้าหน้าที่ติดต่อกลับ": "กรุณาฝากเบอร์โทรเพื่อให้เจ้าหน้าที่ติดต่อกลับ",
                        "ขออภัยเจ้าหน้าที่ยังไม่สามารถให้บริการในตอนนี้ได้": "ขออภัยเจ้าหน้าที่ยังไม่สามารถให้บริการในตอนนี้ได้",
                        "Bitte füllen Sie die Felder unten aus, um unsere Kommunikation zu verbessern.": "Bitte füllen Sie die Felder unten aus, um unsere Kommunikation zu verbessern.",
                        "Wir sind in Kürze für Sie da. Bleiben Sie bei uns!": "Wir sind in Kürze für Sie da. Bleiben Sie bei uns!",
                        "Video Chat": "Video Chat",
                        "Audio Chat": "Audio Chat",
                        "mmmmmmmmmmmm": "mmmmmmmmmmmm",
                        "weqasdmmm": "weqasdmmm",
                        "Type your feedback": "Type your feedback",
                        "कृपया हमारी बातचीत को और अधिक करीब बनाने के लिए नीचे दिए गए विवरण को भरें।": "कृपया हमारी बातचीत को और अधिक करीब बनाने के लिए नीचे दिए गए विवरण को भरें।",
                        "Please click 'ok' to begin sharing your screen with the operator.": "Please click 'ok' to begin sharing your screen with the operator.",
                        "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.": "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.",
                        "New Reservation": "New Reservation",
                        "Existing Reservation": "Existing Reservation",
                        "Customer Service": "Customer Service",
                        "Reservation Type": "Reservation Type",
                        "आपको जल्द ही सूचित किया जाएगा।": "आपको जल्द ही सूचित किया जाएगा।",
                        "您很快就会收到通知。和我们在一起！": "您很快就会收到通知。和我们在一起！",
                        "请填写以下详细信息，以使我们的互动更加紧密。": "请填写以下详细信息，以使我们的互动更加紧密。",
                        "Please fill in your information below.  ": "Please fill in your information below.  ",
                        "Leider sind zur Zeit alle Agenten in einem Gespräch. Bitte hinterlassen Sie Ihre  Daen, sofern Sie von uns kontktiert werden möchten.": "Leider sind zur Zeit alle Agenten in einem Gespräch. Bitte hinterlassen Sie Ihre  Daen, sofern Sie von uns kontktiert werden möchten.",
                        "Leider sind zur Zeit alle Agenten in einem Gespräch. Bitte hinterlassen Sie Ihre  Daten, sofern Sie von uns kontaktiert werden möchten.": "Leider sind zur Zeit alle Agenten in einem Gespräch. Bitte hinterlassen Sie Ihre  Daten, sofern Sie von uns kontaktiert werden möchten.",
                        "Leider sind zur Zeit alle Agenten in einem Gespräch. Bitte hinterlassen Sie Ihre  Daten, sofern Sie von uns kzurückgerufen werden möchten.": "Leider sind zur Zeit alle Agenten in einem Gespräch. Bitte hinterlassen Sie Ihre  Daten, sofern Sie von uns kzurückgerufen werden möchten.",
                        "Thank you, you will be notified soon!": "Thank you, you will be notified soon!",
                        "Please provide the following information so that we may better assist you": "Please provide the following information so that we may better assist you",
                        "Don't worry, all of our technicians are busy but we will be with you shortly": "Don't worry, all of our technicians are busy but we will be with you shortly",
                        "We will be in touch with you soon. Thank you!": "We will be in touch with you soon. Thank you!",
                        "hiiooo": "hiiooo",
                        "We’ll get back to you within one business day.": "We’ll get back to you within one business day.",
                        "If you have additional questions, please ask here.": "If you have additional questions, please ask here.",
                        "While you wait it would be helpful if you could fill in the below information": "While you wait it would be helpful if you could fill in the below information",
                        "We'll be with you soon. Stay with us!": "We'll be with you soon. Stay with us!",
                        "Bitte hinterlassen Sie Ihre Kontaktdaten. Wir setzen uns schnellstmöglich mit Ihnen in Verbindung.": "Bitte hinterlassen Sie Ihre Kontaktdaten. Wir setzen uns schnellstmöglich mit Ihnen in Verbindung.",
                        "Vielen Dank für Ihre Nachricht.": "Vielen Dank für Ihre Nachricht.",
                        "Bitte füllen Sie die Felder aus": "Bitte füllen Sie die Felder aus",
                        "Sie werden in Kürze benachrichte. Bitte warten Sie": "Sie werden in Kürze benachrichte. Bitte warten Sie",
                        "Alle Berater befinden sich derzeit in einem Gespräch. Hinterlassen Sie uns Ihre Kontaktdaten und wir melden uns in Kürze bei Ihnen. Vielen Dank Ihre Audi Online Beratung": "Alle Berater befinden sich derzeit in einem Gespräch. Hinterlassen Sie uns Ihre Kontaktdaten und wir melden uns in Kürze bei Ihnen. Vielen Dank Ihre Audi Online Beratung",
                        "Please select something": "Please select something",
                        "Our team has been notified and they are working to be of service to you.": "Our team has been notified and they are working to be of service to you.",
                        "Fill in the below details to customize your experience.": "Fill in the below details to customize your experience.",
                        "While you wait, please complete the form below so we can assist you faster.": "While you wait, please complete the form below so we can assist you faster.",
                        "Thanks for your patience. We will be with you soon.  ": "Thanks for your patience. We will be with you soon.  ",
                        "Udfyld nedenstående detaljer for at gøre vores interaktion mere tættere.": "Udfyld nedenstående detaljer for at gøre vores interaktion mere tættere.",
                        "Du vil blive underrettet hurtigt. Bliv hos os!ffvvv": "Du vil blive underrettet hurtigt. Bliv hos os!ffvvv",
                        "Du vil blive underrettet hurtigt. Bliv hos os!ffvvvcccc": "Du vil blive underrettet hurtigt. Bliv hos os!ffvvvcccc",
                        " nice": " nice",
                        "form title data": "form title data",
                        "Vivek Isa coolvv": "Vivek Isa coolvv",
                        "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen. Sie können das Chatfenster minimieren.": "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen. Sie können das Chatfenster minimieren.",
                        "Alle Berater befinden sich derzeit in einem Kundengespräch. Übermitteln Sie uns Ihre Kontaktdaten und wir melden uns in Kürze bei Ihnen. Sie können das aktive Chatfenster geöffnet lassen und Sie werden direkt verbunden mit einem freien Audi Online Berater.": "Alle Berater befinden sich derzeit in einem Kundengespräch. Übermitteln Sie uns Ihre Kontaktdaten und wir melden uns in Kürze bei Ihnen. Sie können das aktive Chatfenster geöffnet lassen und Sie werden direkt verbunden mit einem freien Audi Online Berater.",
                        " Alle Berater befinden sich derzeit in einem Kundengespräch. Übermitteln Sie uns Ihre Kontaktdaten und wir melden uns in Kürze bei Ihnen. Sie können das Chatfenster minimieren.": " Alle Berater befinden sich derzeit in einem Kundengespräch. Übermitteln Sie uns Ihre Kontaktdaten und wir melden uns in Kürze bei Ihnen. Sie können das Chatfenster minimieren.",
                        "Alle Berater befinden sich derzeit in einem Kundengespräch. Übermitteln Sie uns Ihre Kontaktdaten und wir melden uns in Kürze bei Ihnen.": "Alle Berater befinden sich derzeit in einem Kundengespräch. Übermitteln Sie uns Ihre Kontaktdaten und wir melden uns in Kürze bei Ihnen.",
                        "Vielen Dank für Ihre Nachricht. Sie können das Chatfenster minimieren.": "Vielen Dank für Ihre Nachricht. Sie können das Chatfenster minimieren.",
                        "Etkileşimimizi daha da yakınlaştırmak için lütfen aşağıdaki ayrıntıyı doldurun.": "Etkileşimimizi daha da yakınlaştırmak için lütfen aşağıdaki ayrıntıyı doldurun.",
                        "Yakında bilgilendirileceksiniz. Bizimle kal!": "Yakında bilgilendirileceksiniz. Bizimle kal!",
                        "vivek ghanchi": "vivek ghanchi",
                        "Field": "Field",
                        "This is nice": "This is nice",
                        "Nice one": "Nice one",
                        "Ok Google": "Ok Google",
                        "Θα σας ειδοποιηθεί σύντομα. Μείνε μαζί μας!": "Θα σας ειδοποιηθεί σύντομα. Μείνε μαζί μας!",
                        "How ": "How ",
                        "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze per eMail bei Ihnen. Sie können das Chatfenster minimieren.": "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze per eMail bei Ihnen. Sie können das Chatfenster minimieren.",
                        "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze per Telefon bei Ihnen. Sie können das Chatfenster minimieren.": "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze per Telefon bei Ihnen. Sie können das Chatfenster minimieren.",
                        "Alle Berater befinden sich derzeit in einem Kundengespräch. Übermitteln Sie uns Ihre Kontaktdaten und wir melden uns in Kürze per Telefon bei Ihnen.": "Alle Berater befinden sich derzeit in einem Kundengespräch. Übermitteln Sie uns Ihre Kontaktdaten und wir melden uns in Kürze per Telefon bei Ihnen.",
                        "يرجى ملء التفاصيل أدناه لجعل تفاعلنا أقرب.": "يرجى ملء التفاصيل أدناه لجعل تفاعلنا أقرب.",
                        "سيتم إخطارك قريبًا. ابقى معنا!": "سيتم إخطارك قريبًا. ابقى معنا!",
                        "Hey! Please complete this short form and we'll be right with you.": "Hey! Please complete this short form and we'll be right with you.",
                        "Du vil blive underrettet hurtigt. Bliv hos os!": "Du vil blive underrettet hurtigt. Bliv hos os!",
                        "You will be notified soon. Stay with us!!": "You will be notified soon. Stay with us!!",
                        "Apologies for the wait, we are just helping other customers, we will be with you soon!": "Apologies for the wait, we are just helping other customers, we will be with you soon!",
                        "Please fill the below detail to allow us to help you quicker": "Please fill the below detail to allow us to help you quicker",
                        "Stay with us! We will be with you shortly.": "Stay with us! We will be with you shortly.",
                        "Please fill the below detail.": "Please fill the below detail.",
                        "S'il vous plaît remplir les détails ci-dessous pour rendre notre interaction plus étroite.": "S'il vous plaît remplir les détails ci-dessous pour rendre notre interaction plus étroite.",
                        "Vous serez informé bientôt. Rester avec nous!": "Vous serez informé bientôt. Rester avec nous!",
                        "Vul het onderstaande detail in om onze interactie nader te maken.": "Vul het onderstaande detail in om onze interactie nader te maken.",
                        "U wordt binnenkort op de hoogte gebracht. Blijf bij ons!": "U wordt binnenkort op de hoogte gebracht. Blijf bij ons!",
                        "الرجاء تعبئة النموذج بالأسفل": "الرجاء تعبئة النموذج بالأسفل",
                        "عزيزي العميل شكراً لك، سيتم خدمتك في اقرب وقت ممكن وتحديثك بذلك عبر التنبيهات": "عزيزي العميل شكراً لك، سيتم خدمتك في اقرب وقت ممكن وتحديثك بذلك عبر التنبيهات",
                        "We are monitoring, Do you agree?": "We are monitoring, Do you agree?",
                        "hindi is ok": "hindi is ok",
                        "We'll be with you shortly.": "We'll be with you shortly.",
                        "H": "H",
                        "Es kann einen Moment dauern. Warte bitte kurz.": "Es kann einen Moment dauern. Warte bitte kurz.",
                        "Bitte gib uns folgenden Informationen, damit wir uns mit dir in Kontakt setzen können.": "Bitte gib uns folgenden Informationen, damit wir uns mit dir in Kontakt setzen können.",
                        "Por favor, preencha o formulário abaixo para que possamos te ajudar.": "Por favor, preencha o formulário abaixo para que possamos te ajudar.",
                        "Você será informado em breve, por favor aguarde.": "Você será informado em breve, por favor aguarde.",
                        "Just a bit of information will help us serve you better.": "Just a bit of information will help us serve you better.",
                        "Sorry for the wait - we'll be with you soon!": "Sorry for the wait - we'll be with you soon!",
                        "Testing Testing": "Testing Testing",
                        "Form Title": "Form Title",
                        "Você será notificado em breve. Fique conosco!": "Você será notificado em breve. Fique conosco!",
                        "Por favor, preencha os detalhes abaixo para tornar nossa interação mais próxima.": "Por favor, preencha os detalhes abaixo para tornar nossa interação mais próxima.",
                        "Visitor Details": "Visitor Details",
                        "Custom Fields": "Custom Fields",
                        "Footprints": "Footprints",
                        "Thank you for your patience, we will respond to you soon!": "Thank you for your patience, we will respond to you soon!",
                        "Please provide the following details so we can serve you better.": "Please provide the following details so we can serve you better.",
                        "All agents are buys right now please fill out the form to leave a message, thank you.": "All agents are buys right now please fill out the form to leave a message, thank you.",
                        "Merci de votre patience, un de nos experts sera avec vous sous peu...": "Merci de votre patience, un de nos experts sera avec vous sous peu...",
                        "You will be notified soon. Stay with us! 1234": "You will be notified soon. Stay with us! 1234",
                        "Find an answer quickly?": "Find an answer quickly?",
                        "Average ": "Average ",
                        "Online Agents": "Online Agents",
                        "Live Agents": "Live Agents",
                        "Departments": "Departments",
                        "Offline Agents": "Offline Agents",
                        "Please provide information about your question or request in the form below.": "Please provide information about your question or request in the form below.",
                        "A Member Service Representative will reach out to you shortly.": "A Member Service Representative will reach out to you shortly.",
                        "We will get back to you soon. Stay with us!": "We will get back to you soon. Stay with us!",
                        "Sorry for the wait, we will be with your soon": "Sorry for the wait, we will be with your soon",
                        "Sie werden in Kürze benachrichtigt.": "Sie werden in Kürze benachrichtigt.",
                        "Waiting for the agent reply...": "Waiting for the agent reply...",
                        "Error connecting server. Please check your credentials.": "Error connecting server. Please check your credentials.",
                        "Error connecting server.": "Error connecting server.",
                        "Please check your credentials.": "Please check your credentials.",
                        "File downloaded": "File downloaded",
                        "Please wait...": "Please wait...",
                        "File Not Supported": "File Not Supported",
                        "Screen sharing is not available right now": "Screen sharing is not available right now",
                        "Please use core sdk for this feature.": "Please use core sdk for this feature.",
                        "Your plan does not include this feature.": "Your plan does not include this feature.",
                        "Start a conversation first": "Start a conversation first",
                        "Calling": "Calling",
                        "Agent doesn't want to share video": "Agent doesn't want to share video",
                        "Upload File": "Upload File",
                        "How do you want to upload your file?": "How do you want to upload your file?",
                        "Share your android screen?": "Share your android screen?",
                        "Agent wants to see your screen.": "Agent wants to see your screen.",
                        "Please allow all the permissions of Acquire in the Settings": "Please allow all the permissions of Acquire in the Settings",
                        "Leave Session": "Leave Session",
                        "You are about to end co-browse session.": "You are about to end co-browse session.",
                        "Our agents are engaged. An agent will be with you shortly": "Our agents are engaged. An agent will be with you shortly",
                        "You will be attended to shortly. Stay with us!": "You will be attended to shortly. Stay with us!",
                        "Please allow at least one business day for us to get back to you. =)": "Please allow at least one business day for us to get back to you. =)",
                        "Please fill out the below so we can better assist you.": "Please fill out the below so we can better assist you.",
                        "We will be with you soon. Stay with us!": "We will be with you soon. Stay with us!",
                        "Please complete the info below to expedite your request.  ": "Please complete the info below to expedite your request.  ",
                        "If you fill out this form, we'll get back to you.": "If you fill out this form, we'll get back to you.",
                        "Ugh...so sorry this is taking a long time": "Ugh...so sorry this is taking a long time",
                        "Enter your reply here": "Enter your reply here",
                        "Reply Now": "Reply Now",
                        "Give Email or Phone and the team a way to reach you": "Give Email or Phone and the team a way to reach you",
                        "Camera": "Camera",
                        "Gallery": "Gallery",
                        "Sorry, there is no executive is available to pick this chat right now": "Sorry, there is no executive is available to pick this chat right now",
                        "Visitor": "Visitor",
                        "Are you sure you want to reject call request?": "Are you sure you want to reject call request?",
                        "Please give permissions to access storage": "Please give permissions to access storage",
                        "Please give permissions to capture audio and video": "Please give permissions to capture audio and video",
                        "Please give permissions to use microphone": "Please give permissions to use microphone",
                        "Vielen Dank für Ihre Angaben. Ihre Daten wurden hinterlegt.": "Vielen Dank für Ihre Angaben. Ihre Daten wurden hinterlegt.",
                        "Oi, tudo bem? Estamos finalizando uma conversar e vamos te atender em breve.": "Oi, tudo bem? Estamos finalizando uma conversar e vamos te atender em breve.",
                        "Para a gente iniciar a conversa, preenche seu nome e se quiser o seu telefone e e-mail.": "Para a gente iniciar a conversa, preenche seu nome e se quiser o seu telefone e e-mail.",
                        "Si prega di compilare i dettagli di seguito per rendere più vicina la nostra interazione.": "Si prega di compilare i dettagli di seguito per rendere più vicina la nostra interazione.",
                        "I nostri operatori adesso non sono disponibili. Per favore lascia un messaggio!": "I nostri operatori adesso non sono disponibili. Per favore lascia un messaggio!",
                        "Reply Now...": "Reply Now...",
                        "Please let us know more about you so that we can serve you better": "Please let us know more about you so that we can serve you better",
                        "Our promoters are busy at the moment. They will serve you shortly!": "Our promoters are busy at the moment. They will serve you shortly!",
                        "Oi, tudo bem? Estamos finalizando uma conversa e vamos te atender em breve.": "Oi, tudo bem? Estamos finalizando uma conversa e vamos te atender em breve.",
                        "Paruiser o seu telefone e e-mail.a a gente iniciar a conversa, preenche seu nome e se q": "Paruiser o seu telefone e e-mail.a a gente iniciar a conversa, preenche seu nome e se q",
                        "Ügyintézőnk hamarosan kapcsolatba lép Önnel.": "Ügyintézőnk hamarosan kapcsolatba lép Önnel.",
                        "Kérjük töltse ki az alábbi űrlapot, hogy tovább tudjuk javítani szolgáltatásunkat.": "Kérjük töltse ki az alábbi űrlapot, hogy tovább tudjuk javítani szolgáltatásunkat.",
                        "Our vPromoters are busy at the moment. They will serve you shortly!": "Our vPromoters are busy at the moment. They will serve you shortly!",
                        "New Passenger": "New Passenger",
                        "Por favor llena estos datos para poder comunicarnos contigo": "Por favor llena estos datos para poder comunicarnos contigo",
                        "por favor, preenche os detalhes abaixo pra gente fazer o seu atendimento.": "por favor, preenche os detalhes abaixo pra gente fazer o seu atendimento.",
                        "oie, tudo bem? estamos finalizando uma conversa e vamos te atender em breve.": "oie, tudo bem? estamos finalizando uma conversa e vamos te atender em breve.",
                        "Show translated": "Show translated",
                        "Pourriez-vous nous donner plus d'informations svp ?": "Pourriez-vous nous donner plus d'informations svp ?",
                        "Désolé de ne pouvoir vous répondre en ce moment ... Restez avec nous !": "Désolé de ne pouvoir vous répondre en ce moment ... Restez avec nous !",
                        "Done": "Done",
                        "Veuillez compléter les informations ci-dessous.": "Veuillez compléter les informations ci-dessous.",
                        "Bonjour, aucun de nos conseillers n'est disponible pour le moment. ": "Bonjour, aucun de nos conseillers n'est disponible pour le moment. ",
                        "Bonjour, Aucun de nos conseillers n'est disponible pour le moment. Vous pouvez nous laisser vos coordonnées dans le formulaire ci-dessous afin d'être recontacter ou bien rester en ligne et attendre qu'un conseiller prenne en charge votre demande. ": "Bonjour, Aucun de nos conseillers n'est disponible pour le moment. Vous pouvez nous laisser vos coordonnées dans le formulaire ci-dessous afin d'être recontacter ou bien rester en ligne et attendre qu'un conseiller prenne en charge votre demande. ",
                        "If you could fill out the information below, it will help us help you even faster!": "If you could fill out the information below, it will help us help you even faster!",
                        "We're helping a lot of students right now, we'll get to you as soon as we can! ": "We're helping a lot of students right now, we'll get to you as soon as we can! ",
                        "Updating preferences may refresh your browser window. You will automatically rejoin the conversation.": "Updating preferences may refresh your browser window. You will automatically rejoin the conversation.",
                        "Switch preferred camera and microphone": "Switch preferred camera and microphone",
                        "Microphone": "Microphone",
                        "Sound Output": "Sound Output",
                        "Veuillez compléter les informations ci-dessous :": "Veuillez compléter les informations ci-dessous :",
                        "A Bayer Medical Affairs representative will be with you soon. Stay with us!": "A Bayer Medical Affairs representative will be with you soon. Stay with us!",
                        "Someone will be with you soon. Stay with us!": "Someone will be with you soon. Stay with us!",
                        "Prosimy o wypełnienie poniższych szczegółów, aby nasza interakcja była bliższa.": "Prosimy o wypełnienie poniższych szczegółów, aby nasza interakcja była bliższa.",
                        "Zostaniesz wkrótce powiadomiony. Zostań z nami!": "Zostaniesz wkrótce powiadomiony. Zostań z nami!"
                    }
                },
                "webhook_manual_sync": false,
                "google_integration": {
                    "google_analytics": null,
                    "gtagDataLayerEnable": false,
                    "gtmCode": null,
                    "gtmEventName": ""
                }
            },
            "tweaks": {
                "lazzy_socket": false
            }
        };

    if (host.indexOf('NODE_SERVER_DEF') >= 0) {
        host = 's.acquire.io';
    }
    window.tagoveConfigNodeServer = host;
    window.tagoveConfigNodedc = '/dc-eu4';


    if (window.__acquire_loaded && window.__acquire_loaded[config_url]) {
        console.log('acquire widget code has been put mulitple times on website. please remove one acquire code.');
        return;
    }
    window.__acquire_loaded = window.__acquire_loaded || {};
    window.__acquire_loaded[config_url] = true;



    // Helper Functions...
    var ajax = (function() {
        var ajax = {};
        ajax.x = function() {
            if (typeof XMLHttpRequest !== 'undefined') {
                return new XMLHttpRequest();
            }
            var versions = [
                'MSXML2.XmlHttp.6.0',
                'MSXML2.XmlHttp.5.0',
                'MSXML2.XmlHttp.4.0',
                'MSXML2.XmlHttp.3.0',
                'MSXML2.XmlHttp.2.0',
                'Microsoft.XmlHttp',
            ];

            var xhr;
            for (var i = 0; i < versions.length; i++) {
                try {
                    xhr = new ActiveXObject(versions[i]);
                    break;
                } catch (e) {}
            }

            return xhr;
        };
        ajax.send = function(url, callback, method, cros) {
            var x = ajax.x();
            if (cros) {
                x.withCredentials = true;
            }
            x.open(method, url, true);
            x.onreadystatechange = function() {
                if (x.readyState == 4) {
                    if (x.status === 200)
                        callback(null, x.responseText);
                    else {
                        callback(x);
                    }
                }
            };
            try {
                x.send();
            } catch (e) {
                callback(e);
            }
        };
        return ajax;
    }());

    var areWeInsideFrame = (function() {

        var tagoveThere = null;
        var tagoveThereTimer = null;
        var onWindowMessage = function(event) {
            var origin = event.origin || event.originalEvent.origin;

            if (event.data === 'tagove-are-you-there' && event.source !== window) {
                event.source.postMessage('yes-buddy-tagove-here', origin);
            }
            if (event.data == 'yes-buddy-tagove-here' && event.source !== window) {
                clearTimeout(tagoveThereTimer);
                for (var i = 0; i < tagoveThere.length; i++)
                    tagoveThere[i](true);
                tagoveThere = {
                    length: null,
                    push: function(cb) {
                        cb(true);
                    },
                };
            }
        };

        if (window.addEventListener) {
            window.addEventListener('message', onWindowMessage, false);
        } else window.attachEvent('onmessage', onWindowMessage);

        return function(cb) {
            if (window.tagoveSilentTest || window.acquire_bare_backend)
                return cb(false);
            try {
                if (top === self) {
                    return cb(false);
                }
                if ((top !== self && typeof window.top.acquireIO !== 'undefined')) {
                    return cb(true); // no load..
                }
            } catch (e) {
                console.log(e);
            }

            if (tagoveThere === null) {
                tagoveThere = [];
                tagoveThere.push(cb);

                window.parent.postMessage('tagove-are-you-there', '*');
                tagoveThereTimer = setTimeout(function() {
                    for (var i = 0; i < tagoveThere.length; i++)
                        tagoveThere[i](false);
                    tagoveThere = {
                        length: null,
                        push: function(cb) {
                            cb(false);
                        },
                    };
                }, 3000);
            } else {
                tagoveThere.push(cb);
            }
        };
    }());

    var configureRaven = (function() {
        var loaded = false;
        var disableRaven = (/MSIE|Trident/.test(window.navigator.userAgent));
        try {
            //if (config_url.indexOf('localhost') >= 0)
            //    return initAcquire();

            if (!disableRaven &&
                (config_url.indexOf('localhost') < 0) &&
                !iso &&
                (
                    (window.location.href.indexOf('app.acquire.io') >= 0 && window.location.href.indexOf('app.acquire.io/s/') < 0)
                )
            ) {
                loaded = [];
                var script = document.createElement('script');
                script.src = nodejs_url + 'asset/raven.min.3.26.4.js';
                try {
                    script.crossorigin = 'anonymous';
                } catch (e) {}
                script.onerror = function() {
                    loaded = false;
                    console.error("raven load failed.");
                };

                script.onload = function() {
                    if (loaded && loaded.length)
                        for (var i = 0; i < loaded.length; i++) {
                            loaded[i]();
                        }
                    loaded = {
                        push: function(cb) {
                            cb();
                        }
                    };
                };
                var sxf = document.getElementsByTagName('script')[0];
                if (sxf && sxf.parentNode)
                    sxf.parentNode.insertBefore(script, sxf);
            }
        } catch (e) {
            console.error(e);
            loaded = false;
        }


        return function(hash_url) {
            if (loaded) {
                loaded.push(function() {
                    var release = hash_url.split('/').splice(-1).join('').split('.')[1];
                    window.acq_rav = window.Raven.noConflict();
                    window.acq_rav.config('https://fc66f8639f504b8f8e40727fb17a89d9@sentry.io/1247382', {
                        release: release,
                        serverName: window.location.host,
                        debug: false,
                        environment: env,
                    }).install();
                    window.acq_rav.context(function() {
                        window.acq_rav.setUserContext({
                            account: 'dfdde'
                        });
                    });
                });
            }
        };
    }());


    var loadAcquireWidget = function() {

        if (window.location.href.indexOf('_skip_acquire_load') >= 0)
            return;

        /**
         * Load Configs
         */
        (function() {
            if (iso) {
                window.acquire_iso = iso;
            } else {
                window.acquire = window.acquire || [];
                if (!config_json) {
                    ajax.send(config_url, function(err, data) {
                        if (err) {
                            return console.error(err);
                        }
                        try {
                            data = JSON.parse(data);
                            window.acquire.push(data);
                        } catch (e) {}
                    }, 'GET');
                } else {
                    window._acquire_init_config = JSON.stringify(config_json);
                    if (config_json.account == 'dfdde' && config_url.indexOf('/frontend') >= 0) {
                        window.acquire.pop();
                    }
                    window.acquire.push(config_json);
                }
            }
        }());



        // LOAD JS SDK
        var load_sdk = function() {
            var addJS = function(data) {
                configureRaven(data);
                window._acquire__front_bundle_url = data.replace('backend.', 'frontend.');
                if (window._acquire__front_bundle_url.indexOf('localhost') < 0)
                    window._acquire__front_bundle_url = window._acquire__front_bundle_url.replace('.min', '').replace('.bundle', '.bundle.min');

                var s = document.createElement('script');
                s.src = data;
                var sx = document.getElementsByTagName('script')[0];
                sx.parentNode.insertBefore(s, sx);
            };
            if (jsbundle_url && jsbundle_url.indexOf('BUNDLE_') !== 0 && jsbundle_url != '') {
                addJS(jsbundle_url);
            } else {
                var _start = Date.now();
                var sered = function() {
                    ajax.send(jshash_url, function(err, data) {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        var time = (Date.now() - _start) / 1000;
                        var size = data.length + 250 + 250;
                        var speed = (size / time) / 1024; // kbps
                        speed = (size / time) / 1024; // mbps
                        window.acquire_speed = speed.toFixed(2);
                        window.acquire_js_time = time;
                        window.acquire_js_size = (data.length / (1024 * 1024)).toFixed(3) + " mb";

                        try {
                            data = JSON.parse(data);
                            if (data) {
                                addJS(data);
                            }
                        } catch (e) {}
                    }, 'GET');
                };
                sered();
            };
        };

        if (
            config_url.indexOf('/frontend') >= 0 && (
                window.location.host.indexOf('acquire.io') >= 0 ||
                window.location.host.indexOf('localhost:2930') === 0
            ) && (
                window.location.host.indexOf('dev.acquire.io') < 0
            )
        ) { //test-1
            // load iframe user acquire's customer details.. if they are logged in..
            var host = window.location.host.indexOf('localhost:2930') === 0 ? 'https://localhost:2930/' : (
                window.location.protocol + '//' +
                (window.location.host.indexOf('acquire.io') >= 0 ? 'app.acquire.io' : window.location.host) + '/'
            );
            var type = window.location.href.indexOf('acquire.io/s/') >= 0 || window.location.href.indexOf(':2930/s/') >= 0 ? 'self' : 'acquire';
            var acc_uid = config_url.match(/\/a-([a-z0-9A-Z]*)\//g, '')[0].replace(/\//g, '').replace('a-', '');

            ajax.send(host + 'api/config/init/acquire?for=' + type + "&acc=" + acc_uid, function(err, data) {
                if (!err) {
                    try {
                        data = JSON.parse(data);
                        if (data.success) {
                            window.acquire_iso_config = ({
                                user_hash: data.data.user_hash,
                                custom_cobrowse_code: data.data.custom_cobrowse_code,
                            });
                            window.acquire_iso_user = data.data.userDetails;
                        } else if (type == 'self') {
                            window.acquire_iso_user = {
                                name: '#Simulate Visitor',
                            };
                        }
                    } catch (e) {}
                }
                load_sdk();
            }, 'GET', true);
        } else load_sdk();
    };
    var initAcquire = function() {
        areWeInsideFrame(function(inside) {
            if (!inside) {
                loadAcquireWidget();
            } else {
                // proxy setup..
                // don't support cross domains calls.. only allowed domain can access acquire from inside..
                try {
                    window.top.acquire.push(function(app) {
                        window.tagoveApp = app;
                        window.acquireIO = app;
                    });
                } catch (e) {}
            }
        });
    };

    initAcquire();

    // na
})());