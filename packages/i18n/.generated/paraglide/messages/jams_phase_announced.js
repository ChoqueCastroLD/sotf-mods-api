/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Phase_AnnouncedInputs */

const en_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announced`)
};

const es_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anunciado`)
};

const de_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angekündigt`)
};

const fr_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annoncé`)
};

const it_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annunciato`)
};

const nl_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aangekondigd`)
};

const pl_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszony`)
};

const pt_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anunciado`)
};

const ru_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Анонсирован`)
};

const sv_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillkännagiven`)
};

const tr_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuruldu`)
};

const zh_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已公布`)
};

const ja_jams_phase_announced = /** @type {(inputs: Jams_Phase_AnnouncedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告知済み`)
};

/**
* | output |
* | --- |
* | "Announced" |
*
* @param {Jams_Phase_AnnouncedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_phase_announced = /** @type {((inputs?: Jams_Phase_AnnouncedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Phase_AnnouncedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_phase_announced(inputs)
	if (locale === "de") return de_jams_phase_announced(inputs)
	if (locale === "fr") return fr_jams_phase_announced(inputs)
	if (locale === "it") return it_jams_phase_announced(inputs)
	if (locale === "nl") return nl_jams_phase_announced(inputs)
	if (locale === "pl") return pl_jams_phase_announced(inputs)
	if (locale === "pt") return pt_jams_phase_announced(inputs)
	if (locale === "ru") return ru_jams_phase_announced(inputs)
	if (locale === "sv") return sv_jams_phase_announced(inputs)
	if (locale === "tr") return tr_jams_phase_announced(inputs)
	if (locale === "zh") return zh_jams_phase_announced(inputs)
	if (locale === "ja") return ja_jams_phase_announced(inputs)
	return en_jams_phase_announced(inputs)
});
