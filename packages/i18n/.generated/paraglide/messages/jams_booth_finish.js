/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_FinishInputs */

const en_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finish`)
};

const es_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminar`)
};

const de_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fertig`)
};

const fr_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminer`)
};

const it_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fine`)
};

const nl_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klaar`)
};

const pl_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakończ`)
};

const pt_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concluir`)
};

const ru_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готово`)
};

const sv_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klar`)
};

const tr_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitir`)
};

const zh_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成`)
};

const ja_jams_booth_finish = /** @type {(inputs: Jams_Booth_FinishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完了`)
};

/**
* | output |
* | --- |
* | "Finish" |
*
* @param {Jams_Booth_FinishInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_finish = /** @type {((inputs?: Jams_Booth_FinishInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_FinishInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_finish(inputs)
	if (locale === "de") return de_jams_booth_finish(inputs)
	if (locale === "fr") return fr_jams_booth_finish(inputs)
	if (locale === "it") return it_jams_booth_finish(inputs)
	if (locale === "nl") return nl_jams_booth_finish(inputs)
	if (locale === "pl") return pl_jams_booth_finish(inputs)
	if (locale === "pt") return pt_jams_booth_finish(inputs)
	if (locale === "ru") return ru_jams_booth_finish(inputs)
	if (locale === "sv") return sv_jams_booth_finish(inputs)
	if (locale === "tr") return tr_jams_booth_finish(inputs)
	if (locale === "zh") return zh_jams_booth_finish(inputs)
	if (locale === "ja") return ja_jams_booth_finish(inputs)
	return en_jams_booth_finish(inputs)
});
