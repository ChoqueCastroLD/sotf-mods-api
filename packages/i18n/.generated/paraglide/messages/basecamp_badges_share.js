/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ share: NonNullable<unknown> }} Basecamp_Badges_ShareInputs */

const en_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} of survivors have it`)
};

const es_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La tiene el ${i?.share} de los supervivientes`)
};

const de_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} der Überlebenden haben es`)
};

const fr_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} des survivants l’ont`)
};

const it_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lo ha il ${i?.share} dei sopravvissuti`)
};

const nl_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} van de overlevenden heeft hem`)
};

const pl_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ma ją ${i?.share} ocalałych`)
};

const pt_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} dos sobreviventes têm`)
};

const ru_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Есть у ${i?.share} выживших`)
};

const sv_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} av de överlevande har det`)
};

const tr_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hayatta kalanların ${i?.share} kadarında var`)
};

const zh_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} 的幸存者拥有`)
};

const ja_basecamp_badges_share = /** @type {(inputs: Basecamp_Badges_ShareInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`サバイバーの ${i?.share} が所持`)
};

/**
* | output |
* | --- |
* | "{share} of survivors have it" |
*
* @param {Basecamp_Badges_ShareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_share = /** @type {((inputs: Basecamp_Badges_ShareInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_ShareInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_share(inputs)
	if (locale === "de") return de_basecamp_badges_share(inputs)
	if (locale === "fr") return fr_basecamp_badges_share(inputs)
	if (locale === "it") return it_basecamp_badges_share(inputs)
	if (locale === "nl") return nl_basecamp_badges_share(inputs)
	if (locale === "pl") return pl_basecamp_badges_share(inputs)
	if (locale === "pt") return pt_basecamp_badges_share(inputs)
	if (locale === "ru") return ru_basecamp_badges_share(inputs)
	if (locale === "sv") return sv_basecamp_badges_share(inputs)
	if (locale === "tr") return tr_basecamp_badges_share(inputs)
	if (locale === "zh") return zh_basecamp_badges_share(inputs)
	if (locale === "ja") return ja_basecamp_badges_share(inputs)
	return en_basecamp_badges_share(inputs)
});
