/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Nsfw_LeaveInputs */

const en_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Explore`)
};

const es_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a Explorar`)
};

const de_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zu Entdecken`)
};

const fr_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à Explorer`)
};

const it_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna a Esplora`)
};

const nl_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar Verkennen`)
};

const pl_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do przeglądania`)
};

const pt_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar para Explorar`)
};

const ru_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад к обзору`)
};

const sv_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till Utforska`)
};

const tr_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keşfet’e dön`)
};

const zh_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回探索`)
};

const ja_mod_nsfw_leave = /** @type {(inputs: Mod_Nsfw_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探索に戻る`)
};

/**
* | output |
* | --- |
* | "Back to Explore" |
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
