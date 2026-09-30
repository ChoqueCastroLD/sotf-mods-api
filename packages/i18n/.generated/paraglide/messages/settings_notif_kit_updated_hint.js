/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Kit_Updated_HintInputs */

const en_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A kit you follow gets new mods or changes.`)
};

const es_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un kit que sigues recibe mods nuevos o cambios.`)
};

const de_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Kit, dem du folgst, erhält neue Mods oder Änderungen.`)
};

const fr_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un kit que vous suivez reçoit de nouveaux mods ou des modifications.`)
};

const it_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un kit che segui riceve nuove mod o modifiche.`)
};

const nl_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een kit die je volgt krijgt nieuwe mods of wijzigingen.`)
};

const pl_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwowany zestaw otrzymuje nowe mody lub zmiany.`)
};

const pt_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um kit que você segue recebe novos mods ou alterações.`)
};

const ru_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В набор, на который вы подписаны, добавлены моды или внесены изменения.`)
};

const sv_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett kit du följer får nya mods eller ändringar.`)
};

const tr_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiğin bir kite yeni mod veya değişiklik geldi.`)
};

const zh_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注的套件新增了模组或有改动。`)
};

const ja_settings_notif_kit_updated_hint = /** @type {(inputs: Settings_Notif_Kit_Updated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のキットにモッドの追加や変更があったとき。`)
};

/**
* | output |
* | --- |
* | "A kit you follow gets new mods or changes." |
*
* @param {Settings_Notif_Kit_Updated_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_kit_updated_hint = /** @type {((inputs?: Settings_Notif_Kit_Updated_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Kit_Updated_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_kit_updated_hint(inputs)
	if (locale === "de") return de_settings_notif_kit_updated_hint(inputs)
	if (locale === "fr") return fr_settings_notif_kit_updated_hint(inputs)
	if (locale === "it") return it_settings_notif_kit_updated_hint(inputs)
	if (locale === "nl") return nl_settings_notif_kit_updated_hint(inputs)
	if (locale === "pl") return pl_settings_notif_kit_updated_hint(inputs)
	if (locale === "pt") return pt_settings_notif_kit_updated_hint(inputs)
	if (locale === "ru") return ru_settings_notif_kit_updated_hint(inputs)
	if (locale === "sv") return sv_settings_notif_kit_updated_hint(inputs)
	if (locale === "tr") return tr_settings_notif_kit_updated_hint(inputs)
	if (locale === "zh") return zh_settings_notif_kit_updated_hint(inputs)
	if (locale === "ja") return ja_settings_notif_kit_updated_hint(inputs)
	return en_settings_notif_kit_updated_hint(inputs)
});
