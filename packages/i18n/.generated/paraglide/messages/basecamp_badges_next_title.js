/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Basecamp_Badges_Next_TitleInputs */

const en_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Next badges (${i?.count})`)
};

const es_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Próximas insignias (${i?.count})`)
};

const de_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nächste Abzeichen (${i?.count})`)
};

const fr_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prochains badges (${i?.count})`)
};

const it_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prossimi distintivi (${i?.count})`)
};

const nl_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Volgende badges (${i?.count})`)
};

const pl_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Następne odznaki (${i?.count})`)
};

const pt_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Próximas insígnias (${i?.count})`)
};

const ru_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Следующие значки (${i?.count})`)
};

const sv_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nästa märken (${i?.count})`)
};

const tr_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sıradaki rozetler (${i?.count})`)
};

const zh_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`即将获得的徽章（${i?.count}）`)
};

const ja_basecamp_badges_next_title = /** @type {(inputs: Basecamp_Badges_Next_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`次のバッジ（${i?.count}）`)
};

/**
* | output |
* | --- |
* | "Next badges ({count})" |
*
* @param {Basecamp_Badges_Next_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_next_title = /** @type {((inputs: Basecamp_Badges_Next_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Next_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_next_title(inputs)
	if (locale === "de") return de_basecamp_badges_next_title(inputs)
	if (locale === "fr") return fr_basecamp_badges_next_title(inputs)
	if (locale === "it") return it_basecamp_badges_next_title(inputs)
	if (locale === "nl") return nl_basecamp_badges_next_title(inputs)
	if (locale === "pl") return pl_basecamp_badges_next_title(inputs)
	if (locale === "pt") return pt_basecamp_badges_next_title(inputs)
	if (locale === "ru") return ru_basecamp_badges_next_title(inputs)
	if (locale === "sv") return sv_basecamp_badges_next_title(inputs)
	if (locale === "tr") return tr_basecamp_badges_next_title(inputs)
	if (locale === "zh") return zh_basecamp_badges_next_title(inputs)
	if (locale === "ja") return ja_basecamp_badges_next_title(inputs)
	return en_basecamp_badges_next_title(inputs)
});
