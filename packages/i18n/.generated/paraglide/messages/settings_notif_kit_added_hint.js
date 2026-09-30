/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Kit_Added_HintInputs */

const en_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone added a mod of yours to a public kit.`)
};

const es_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien añadió un mod tuyo a un kit público.`)
};

const de_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand hat einen deiner Mods zu einem öffentlichen Kit hinzugefügt.`)
};

const fr_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un a ajouté un de vos mods à un kit public.`)
};

const it_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno ha aggiunto un tuo mod a un kit pubblico.`)
};

const nl_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand heeft een mod van jou toegevoegd aan een openbare kit.`)
};

const pl_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś dodał Twój mod do publicznego zestawu.`)
};

const pt_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém adicionou um mod seu a um kit público.`)
};

const ru_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то добавил ваш мод в публичный набор.`)
};

const sv_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon lade till en av dina moddar i ett offentligt kit.`)
};

const tr_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biri modlarından birini herkese açık bir kite ekledi.`)
};

const zh_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人把你的模组添加到了公开套件。`)
};

const ja_settings_notif_kit_added_hint = /** @type {(inputs: Settings_Notif_Kit_Added_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`誰かがあなたのMODを公開キットに追加しました。`)
};

/**
* | output |
* | --- |
* | "Someone added a mod of yours to a public kit." |
*
* @param {Settings_Notif_Kit_Added_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_kit_added_hint = /** @type {((inputs?: Settings_Notif_Kit_Added_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Kit_Added_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_kit_added_hint(inputs)
	if (locale === "de") return de_settings_notif_kit_added_hint(inputs)
	if (locale === "fr") return fr_settings_notif_kit_added_hint(inputs)
	if (locale === "it") return it_settings_notif_kit_added_hint(inputs)
	if (locale === "nl") return nl_settings_notif_kit_added_hint(inputs)
	if (locale === "pl") return pl_settings_notif_kit_added_hint(inputs)
	if (locale === "pt") return pt_settings_notif_kit_added_hint(inputs)
	if (locale === "ru") return ru_settings_notif_kit_added_hint(inputs)
	if (locale === "sv") return sv_settings_notif_kit_added_hint(inputs)
	if (locale === "tr") return tr_settings_notif_kit_added_hint(inputs)
	if (locale === "zh") return zh_settings_notif_kit_added_hint(inputs)
	if (locale === "ja") return ja_settings_notif_kit_added_hint(inputs)
	return en_settings_notif_kit_added_hint(inputs)
});
