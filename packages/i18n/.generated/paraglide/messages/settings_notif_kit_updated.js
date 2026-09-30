/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Kit_UpdatedInputs */

const en_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followed kit updated`)
};

const es_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit seguido actualizado`)
};

const de_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gefolgtes Kit aktualisiert`)
};

const fr_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit suivi mis à jour`)
};

const it_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit seguito aggiornato`)
};

const nl_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gevolgde kit bijgewerkt`)
};

const pl_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwowany zestaw zaktualizowany`)
};

const pt_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit seguido atualizado`)
};

const ru_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновлён набор, на который вы подписаны`)
};

const sv_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följt kit uppdaterat`)
};

const tr_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip edilen kit güncellendi`)
};

const zh_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关注套件有更新`)
};

const ja_settings_notif_kit_updated = /** @type {(inputs: Settings_Notif_Kit_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のキットの更新`)
};

/**
* | output |
* | --- |
* | "Followed kit updated" |
*
* @param {Settings_Notif_Kit_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_kit_updated = /** @type {((inputs?: Settings_Notif_Kit_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Kit_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_kit_updated(inputs)
	if (locale === "de") return de_settings_notif_kit_updated(inputs)
	if (locale === "fr") return fr_settings_notif_kit_updated(inputs)
	if (locale === "it") return it_settings_notif_kit_updated(inputs)
	if (locale === "nl") return nl_settings_notif_kit_updated(inputs)
	if (locale === "pl") return pl_settings_notif_kit_updated(inputs)
	if (locale === "pt") return pt_settings_notif_kit_updated(inputs)
	if (locale === "ru") return ru_settings_notif_kit_updated(inputs)
	if (locale === "sv") return sv_settings_notif_kit_updated(inputs)
	if (locale === "tr") return tr_settings_notif_kit_updated(inputs)
	if (locale === "zh") return zh_settings_notif_kit_updated(inputs)
	if (locale === "ja") return ja_settings_notif_kit_updated(inputs)
	return en_settings_notif_kit_updated(inputs)
});
