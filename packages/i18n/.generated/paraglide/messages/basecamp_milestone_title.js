/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Milestone_TitleInputs */

const en_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next milestone`)
};

const es_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próximo hito`)
};

const de_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nächster Meilenstein`)
};

const fr_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prochain palier`)
};

const it_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prossimo traguardo`)
};

const nl_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende mijlpaal`)
};

const pl_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następny kamień milowy`)
};

const pt_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próximo marco`)
};

const ru_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующая веха`)
};

const sv_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa milstolpe`)
};

const tr_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıradaki dönüm noktası`)
};

const zh_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一个里程碑`)
};

const ja_basecamp_milestone_title = /** @type {(inputs: Basecamp_Milestone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次のマイルストーン`)
};

/**
* | output |
* | --- |
* | "Next milestone" |
*
* @param {Basecamp_Milestone_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_milestone_title = /** @type {((inputs?: Basecamp_Milestone_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_milestone_title(inputs)
	if (locale === "de") return de_basecamp_milestone_title(inputs)
	if (locale === "fr") return fr_basecamp_milestone_title(inputs)
	if (locale === "it") return it_basecamp_milestone_title(inputs)
	if (locale === "nl") return nl_basecamp_milestone_title(inputs)
	if (locale === "pl") return pl_basecamp_milestone_title(inputs)
	if (locale === "pt") return pt_basecamp_milestone_title(inputs)
	if (locale === "ru") return ru_basecamp_milestone_title(inputs)
	if (locale === "sv") return sv_basecamp_milestone_title(inputs)
	if (locale === "tr") return tr_basecamp_milestone_title(inputs)
	if (locale === "zh") return zh_basecamp_milestone_title(inputs)
	if (locale === "ja") return ja_basecamp_milestone_title(inputs)
	return en_basecamp_milestone_title(inputs)
});
