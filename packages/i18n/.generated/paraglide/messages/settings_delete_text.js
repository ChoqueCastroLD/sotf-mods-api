/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_TextInputs */

const en_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This permanently removes your personal data after a 14-day grace period.`)
};

const es_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina de forma permanente tus datos personales tras un periodo de gracia de 14 días.`)
};

const de_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernt deine persönlichen Daten nach einer Frist von 14 Tagen endgültig.`)
};

const fr_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprime définitivement vos données personnelles après un délai de grâce de 14 jours.`)
};

const it_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuove definitivamente i tuoi dati personali dopo un periodo di tolleranza di 14 giorni.`)
};

const nl_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijdert je persoonsgegevens definitief na een bedenktijd van 14 dagen.`)
};

const pl_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trwale usuwa twoje dane osobowe po 14-dniowym okresie karencji.`)
};

const pt_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove seus dados pessoais de forma permanente após um período de carência de 14 dias.`)
};

const ru_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши личные данные будут безвозвратно удалены после 14-дневного льготного периода.`)
};

const sv_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tar bort dina personuppgifter permanent efter en ångerfrist på 14 dagar.`)
};

const tr_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`14 günlük bir bekleme süresinden sonra kişisel verilerini kalıcı olarak kaldırır.`)
};

const zh_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 14 天宽限期后永久删除你的个人数据。`)
};

const ja_settings_delete_text = /** @type {(inputs: Settings_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`14 日間の猶予期間の後、個人データを完全に削除します。`)
};

/**
* | output |
* | --- |
* | "This permanently removes your personal data after a 14-day grace period." |
*
* @param {Settings_Delete_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_text = /** @type {((inputs?: Settings_Delete_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_text(inputs)
	if (locale === "de") return de_settings_delete_text(inputs)
	if (locale === "fr") return fr_settings_delete_text(inputs)
	if (locale === "it") return it_settings_delete_text(inputs)
	if (locale === "nl") return nl_settings_delete_text(inputs)
	if (locale === "pl") return pl_settings_delete_text(inputs)
	if (locale === "pt") return pt_settings_delete_text(inputs)
	if (locale === "ru") return ru_settings_delete_text(inputs)
	if (locale === "sv") return sv_settings_delete_text(inputs)
	if (locale === "tr") return tr_settings_delete_text(inputs)
	if (locale === "zh") return zh_settings_delete_text(inputs)
	if (locale === "ja") return ja_settings_delete_text(inputs)
	return en_settings_delete_text(inputs)
});
