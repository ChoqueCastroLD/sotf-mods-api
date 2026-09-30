/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Basecamp_Versions_Yank_TitleInputs */

const en_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yank v${i?.version}?`)
};

const es_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Retirar la v${i?.version}?`)
};

const de_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} zurückziehen?`)
};

const fr_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer la v${i?.version} ?`)
};

const it_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ritirare la v${i?.version}?`)
};

const nl_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} intrekken?`)
};

const pl_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wycofać v${i?.version}?`)
};

const pt_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirar a v${i?.version}?`)
};

const ru_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отозвать v${i?.version}?`)
};

const sv_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dra tillbaka v${i?.version}?`)
};

const tr_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} geri çekilsin mi?`)
};

const zh_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`撤回 v${i?.version}？`)
};

const ja_basecamp_versions_yank_title = /** @type {(inputs: Basecamp_Versions_Yank_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} を取り下げますか？`)
};

/**
* | output |
* | --- |
* | "Yank v{version}?" |
*
* @param {Basecamp_Versions_Yank_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_yank_title = /** @type {((inputs: Basecamp_Versions_Yank_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yank_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_yank_title(inputs)
	if (locale === "de") return de_basecamp_versions_yank_title(inputs)
	if (locale === "fr") return fr_basecamp_versions_yank_title(inputs)
	if (locale === "it") return it_basecamp_versions_yank_title(inputs)
	if (locale === "nl") return nl_basecamp_versions_yank_title(inputs)
	if (locale === "pl") return pl_basecamp_versions_yank_title(inputs)
	if (locale === "pt") return pt_basecamp_versions_yank_title(inputs)
	if (locale === "ru") return ru_basecamp_versions_yank_title(inputs)
	if (locale === "sv") return sv_basecamp_versions_yank_title(inputs)
	if (locale === "tr") return tr_basecamp_versions_yank_title(inputs)
	if (locale === "zh") return zh_basecamp_versions_yank_title(inputs)
	if (locale === "ja") return ja_basecamp_versions_yank_title(inputs)
	return en_basecamp_versions_yank_title(inputs)
});
