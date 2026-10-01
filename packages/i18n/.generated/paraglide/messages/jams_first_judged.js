/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_JudgedInputs */

const en_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entries are judged on`)
};

const es_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las participaciones se valoran por`)
};

const de_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beiträge werden bewertet nach`)
};

const fr_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les participations sont notées sur`)
};

const it_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le iscrizioni sono valutate su`)
};

const nl_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen worden beoordeeld op`)
};

const pl_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia oceniamy pod kątem`)
};

const pt_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As inscrições são avaliadas em`)
};

const ru_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работы оцениваются по`)
};

const sv_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidragen bedöms efter`)
};

const tr_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular şunlara göre puanlanır`)
};

const zh_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品将按以下维度评分`)
};

const ja_jams_first_judged = /** @type {(inputs: Jams_First_JudgedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品は次の観点で評価されます`)
};

/**
* | output |
* | --- |
* | "Entries are judged on" |
*
* @param {Jams_First_JudgedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_judged = /** @type {((inputs?: Jams_First_JudgedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_JudgedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_judged(inputs)
	if (locale === "de") return de_jams_first_judged(inputs)
	if (locale === "fr") return fr_jams_first_judged(inputs)
	if (locale === "it") return it_jams_first_judged(inputs)
	if (locale === "nl") return nl_jams_first_judged(inputs)
	if (locale === "pl") return pl_jams_first_judged(inputs)
	if (locale === "pt") return pt_jams_first_judged(inputs)
	if (locale === "ru") return ru_jams_first_judged(inputs)
	if (locale === "sv") return sv_jams_first_judged(inputs)
	if (locale === "tr") return tr_jams_first_judged(inputs)
	if (locale === "zh") return zh_jams_first_judged(inputs)
	if (locale === "ja") return ja_jams_first_judged(inputs)
	return en_jams_first_judged(inputs)
});
