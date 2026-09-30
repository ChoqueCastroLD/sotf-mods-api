/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_Added_ToastInputs */

const en_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkey added.`)
};

const es_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave de acceso añadida.`)
};

const de_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkey hinzugefügt.`)
};

const fr_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé d’accès ajoutée.`)
};

const it_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkey aggiunta.`)
};

const nl_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkey toegevoegd.`)
};

const pl_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodano klucz dostępu.`)
};

const pt_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave de acesso adicionada.`)
};

const ru_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ключ доступа добавлен.`)
};

const sv_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passkey tillagd.`)
};

const tr_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçiş anahtarı eklendi.`)
};

const zh_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已添加通行密钥。`)
};

const ja_settings_passkeys_added_toast = /** @type {(inputs: Settings_Passkeys_Added_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスキーを追加しました。`)
};

/**
* | output |
* | --- |
* | "Passkey added." |
*
* @param {Settings_Passkeys_Added_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_added_toast = /** @type {((inputs?: Settings_Passkeys_Added_ToastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_Added_ToastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_added_toast(inputs)
	if (locale === "de") return de_settings_passkeys_added_toast(inputs)
	if (locale === "fr") return fr_settings_passkeys_added_toast(inputs)
	if (locale === "it") return it_settings_passkeys_added_toast(inputs)
	if (locale === "nl") return nl_settings_passkeys_added_toast(inputs)
	if (locale === "pl") return pl_settings_passkeys_added_toast(inputs)
	if (locale === "pt") return pt_settings_passkeys_added_toast(inputs)
	if (locale === "ru") return ru_settings_passkeys_added_toast(inputs)
	if (locale === "sv") return sv_settings_passkeys_added_toast(inputs)
	if (locale === "tr") return tr_settings_passkeys_added_toast(inputs)
	if (locale === "zh") return zh_settings_passkeys_added_toast(inputs)
	if (locale === "ja") return ja_settings_passkeys_added_toast(inputs)
	return en_settings_passkeys_added_toast(inputs)
});
