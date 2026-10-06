/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Nsfw_LeaveInputs */

const en_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Mods`)
};

const es_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a Mods`)
};

const de_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zu Mods`)
};

const fr_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour aux mods`)
};

const it_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna alle mod`)
};

const nl_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar Mods`)
};

const pl_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do modów`)
};

const pt_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar para Mods`)
};

const ru_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад к модам`)
};

const sv_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till moddar`)
};

const tr_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlara dön`)
};

const zh_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回模组`)
};

const ja_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD 一覧に戻る`)
};

/**
* | output |
* | --- |
* | "Back to Mods" |
*
* @param {Mod_Nsfw_LeaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_nsfw_leave = /** @type {((inputs?: Mod_Nsfw_LeaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Nsfw_LeaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_nsfw_leave(inputs)
	if (locale === "de") return de_mod_nsfw_leave(inputs)
	if (locale === "fr") return fr_mod_nsfw_leave(inputs)
	if (locale === "it") return it_mod_nsfw_leave(inputs)
	if (locale === "nl") return nl_mod_nsfw_leave(inputs)
	if (locale === "pl") return pl_mod_nsfw_leave(inputs)
	if (locale === "pt") return pt_mod_nsfw_leave(inputs)
	if (locale === "ru") return ru_mod_nsfw_leave(inputs)
	if (locale === "sv") return sv_mod_nsfw_leave(inputs)
	if (locale === "tr") return tr_mod_nsfw_leave(inputs)
	if (locale === "zh") return zh_mod_nsfw_leave(inputs)
	if (locale === "ja") return ja_mod_nsfw_leave(inputs)
	return en_mod_nsfw_leave(inputs)
});
