/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Stage_AnnounceInputs */

const en_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announced`)
};

const es_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anunciado`)
};

const de_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angekündigt`)
};

const fr_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annoncé`)
};

const it_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annunciato`)
};

const nl_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aangekondigd`)
};

const pl_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszenie`)
};

const pt_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anunciado`)
};

const ru_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Анонс`)
};

const sv_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utannonserat`)
};

const tr_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuru`)
};

const zh_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公布`)
};

const ja_jams_stage_announce = /** @type {(inputs: Jams_Stage_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告知`)
};

/**
* | output |
* | --- |
* | "Announced" |
*
* @param {Jams_Stage_AnnounceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_stage_announce = /** @type {((inputs?: Jams_Stage_AnnounceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Stage_AnnounceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_stage_announce(inputs)
	if (locale === "de") return de_jams_stage_announce(inputs)
	if (locale === "fr") return fr_jams_stage_announce(inputs)
	if (locale === "it") return it_jams_stage_announce(inputs)
	if (locale === "nl") return nl_jams_stage_announce(inputs)
	if (locale === "pl") return pl_jams_stage_announce(inputs)
	if (locale === "pt") return pt_jams_stage_announce(inputs)
	if (locale === "ru") return ru_jams_stage_announce(inputs)
	if (locale === "sv") return sv_jams_stage_announce(inputs)
	if (locale === "tr") return tr_jams_stage_announce(inputs)
	if (locale === "zh") return zh_jams_stage_announce(inputs)
	if (locale === "ja") return ja_jams_stage_announce(inputs)
	return en_jams_stage_announce(inputs)
});
