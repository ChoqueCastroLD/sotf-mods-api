/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Badges_None_TitleInputs */

const en_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No badges yet`)
};

const es_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay insignias`)
};

const de_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Abzeichen`)
};

const fr_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de badges`)
};

const it_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun distintivo`)
};

const nl_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen badges`)
};

const pl_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak odznak`)
};

const pt_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há insígnias`)
};

const ru_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значков пока нет`)
};

const sv_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga märken än`)
};

const tr_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz rozet yok`)
};

const zh_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有徽章`)
};

const ja_basecamp_badges_none_title = /** @type {(inputs: Basecamp_Badges_None_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだバッジはありません`)
};

/**
* | output |
* | --- |
* | "No badges yet" |
*
* @param {Basecamp_Badges_None_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_none_title = /** @type {((inputs?: Basecamp_Badges_None_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_None_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_none_title(inputs)
	if (locale === "de") return de_basecamp_badges_none_title(inputs)
	if (locale === "fr") return fr_basecamp_badges_none_title(inputs)
	if (locale === "it") return it_basecamp_badges_none_title(inputs)
	if (locale === "nl") return nl_basecamp_badges_none_title(inputs)
	if (locale === "pl") return pl_basecamp_badges_none_title(inputs)
	if (locale === "pt") return pt_basecamp_badges_none_title(inputs)
	if (locale === "ru") return ru_basecamp_badges_none_title(inputs)
	if (locale === "sv") return sv_basecamp_badges_none_title(inputs)
	if (locale === "tr") return tr_basecamp_badges_none_title(inputs)
	if (locale === "zh") return zh_basecamp_badges_none_title(inputs)
	if (locale === "ja") return ja_basecamp_badges_none_title(inputs)
	return en_basecamp_badges_none_title(inputs)
});
