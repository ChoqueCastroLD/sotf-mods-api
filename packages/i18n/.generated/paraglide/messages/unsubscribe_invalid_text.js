/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Invalid_TextInputs */

const en_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This unsubscribe link is invalid or has expired. Change your emails in Settings.`)
};

const es_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este enlace para darte de baja no es válido o ha caducado. Cambia tus correos en Ajustes.`)
};

const de_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Abmeldelink ist ungültig oder abgelaufen. Ändere deine E-Mails in den Einstellungen.`)
};

const fr_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce lien de désinscription n’est pas valide ou a expiré. Modifiez vos e-mails dans les Paramètres.`)
};

const it_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo link di disiscrizione non è valido o è scaduto. Modifica le tue email nelle Impostazioni.`)
};

const nl_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze afmeldlink is ongeldig of verlopen. Wijzig je e-mails in Instellingen.`)
};

const pl_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten link do rezygnacji jest nieprawidłowy lub wygasł. Zmień ustawienia e-maili w Ustawieniach.`)
};

const pt_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este link de cancelamento é inválido ou expirou. Altere seus e-mails em Configurações.`)
};

const ru_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта ссылка для отписки недействительна или устарела. Измените рассылки в настройках.`)
};

const sv_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här avregistreringslänken är ogiltig eller har gått ut. Ändra dina mejl i Inställningar.`)
};

const tr_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu abonelikten çıkma bağlantısı geçersiz ya da süresi dolmuş. E-postalarını Ayarlar’dan değiştir.`)
};

const zh_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此退订链接无效或已过期。请在设置中更改你的邮件偏好。`)
};

const ja_unsubscribe_invalid_text = /** @type {(inputs: Unsubscribe_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この配信停止リンクは無効か、有効期限が切れています。メールの設定は設定画面から変更できます。`)
};

/**
* | output |
* | --- |
* | "This unsubscribe link is invalid or has expired. Change your emails in Settings." |
*
* @param {Unsubscribe_Invalid_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_invalid_text = /** @type {((inputs?: Unsubscribe_Invalid_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Invalid_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_unsubscribe_invalid_text(inputs)
	if (locale === "de") return de_unsubscribe_invalid_text(inputs)
	if (locale === "fr") return fr_unsubscribe_invalid_text(inputs)
	if (locale === "it") return it_unsubscribe_invalid_text(inputs)
	if (locale === "nl") return nl_unsubscribe_invalid_text(inputs)
	if (locale === "pl") return pl_unsubscribe_invalid_text(inputs)
	if (locale === "pt") return pt_unsubscribe_invalid_text(inputs)
	if (locale === "ru") return ru_unsubscribe_invalid_text(inputs)
	if (locale === "sv") return sv_unsubscribe_invalid_text(inputs)
	if (locale === "tr") return tr_unsubscribe_invalid_text(inputs)
	if (locale === "zh") return zh_unsubscribe_invalid_text(inputs)
	if (locale === "ja") return ja_unsubscribe_invalid_text(inputs)
	return en_unsubscribe_invalid_text(inputs)
});
