/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Matrix_TextInputs */

const en_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For each kind of notification, choose whether it shows in the app and how often it’s emailed. Digests bundle everything into one email.`)
};

const es_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para cada tipo de notificación, elige si se muestra en la app y cada cuánto se envía por correo. Los resúmenes lo agrupan todo en un solo correo.`)
};

const de_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle für jede Art von Benachrichtigung, ob sie in der App erscheint und wie oft sie per E-Mail kommt. Zusammenfassungen bündeln alles in einer E-Mail.`)
};

const fr_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour chaque type de notification, choisissez si elle apparaît dans l’appli et à quelle fréquence elle est envoyée par e-mail. Les résumés regroupent tout dans un seul e-mail.`)
};

const it_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per ogni tipo di notifica scegli se mostrarla nell’app e ogni quanto riceverla via email. I riepiloghi raccolgono tutto in un’unica email.`)
};

const nl_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies per soort melding of die in de app verschijnt en hoe vaak hij wordt gemaild. Samenvattingen bundelen alles in één e-mail.`)
};

const pl_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla każdego rodzaju powiadomienia wybierz, czy ma się pojawiać w aplikacji i jak często ma przychodzić e-mailem. Podsumowania łączą wszystko w jeden e-mail.`)
};

const pt_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para cada tipo de notificação, escolha se ela aparece no app e com que frequência chega por e-mail. Os resumos juntam tudo em um único e-mail.`)
};

const ru_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для каждого типа уведомлений выберите, показывать ли их в приложении и как часто присылать по почте. Сводки собирают всё в одно письмо.`)
};

const sv_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj för varje typ av avisering om den ska visas i appen och hur ofta den mejlas. Sammanfattningar samlar allt i ett mejl.`)
};

const tr_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her bildirim türü için uygulamada gösterilip gösterilmeyeceğini ve ne sıklıkla e-postayla gönderileceğini seç. Özetler her şeyi tek bir e-postada toplar.`)
};

const zh_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为每类通知选择是否在应用内显示，以及邮件发送频率。摘要会把所有内容合并成一封邮件。`)
};

const ja_settings_notif_matrix_text = /** @type {(inputs: Settings_Notif_Matrix_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知の種類ごとに、アプリに表示するかどうかとメールの頻度を選べます。ダイジェストはすべてを1通のメールにまとめます。`)
};

/**
* | output |
* | --- |
* | "For each kind of notification, choose whether it shows in the app and how often it’s emailed. Digests bundle everything into one email." |
*
* @param {Settings_Notif_Matrix_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_matrix_text = /** @type {((inputs?: Settings_Notif_Matrix_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Matrix_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_matrix_text(inputs)
	if (locale === "de") return de_settings_notif_matrix_text(inputs)
	if (locale === "fr") return fr_settings_notif_matrix_text(inputs)
	if (locale === "it") return it_settings_notif_matrix_text(inputs)
	if (locale === "nl") return nl_settings_notif_matrix_text(inputs)
	if (locale === "pl") return pl_settings_notif_matrix_text(inputs)
	if (locale === "pt") return pt_settings_notif_matrix_text(inputs)
	if (locale === "ru") return ru_settings_notif_matrix_text(inputs)
	if (locale === "sv") return sv_settings_notif_matrix_text(inputs)
	if (locale === "tr") return tr_settings_notif_matrix_text(inputs)
	if (locale === "zh") return zh_settings_notif_matrix_text(inputs)
	if (locale === "ja") return ja_settings_notif_matrix_text(inputs)
	return en_settings_notif_matrix_text(inputs)
});
