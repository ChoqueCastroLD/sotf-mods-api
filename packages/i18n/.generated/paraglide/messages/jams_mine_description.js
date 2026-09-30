/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_DescriptionInputs */

const en_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams you can enter and the ones you have already taken part in.`)
};

const es_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams en los que puedes participar y en los que ya has participado.`)
};

const de_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams, bei denen du mitmachen kannst, und solche, an denen du schon teilgenommen hast.`)
};

const fr_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les jams auxquels vous pouvez participer et ceux auxquels vous avez déjà participé.`)
};

const it_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I jam a cui puoi partecipare e quelli a cui hai già partecipato.`)
};

const nl_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams waaraan je kunt meedoen en jams waaraan je al hebt meegedaan.`)
};

const pl_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jamy, w których możesz wziąć udział, i te, w których już uczestniczyłeś.`)
};

const pt_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams em que você pode participar e aqueles de que já participou.`)
};

const ru_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джемы, в которых можно участвовать, и те, где вы уже участвовали.`)
};

const sv_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams du kan delta i och de du redan har deltagit i.`)
};

const tr_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Katılabileceğiniz ve daha önce katıldığınız jam'ler.`)
};

const zh_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你可以参加的 Jam，以及你已参加过的 Jam。`)
};

const ja_jams_mine_description = /** @type {(inputs: Jams_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参加できるジャムと、参加済みのジャム。`)
};

/**
* | output |
* | --- |
* | "Jams you can enter and the ones you have already taken part in." |
*
* @param {Jams_Mine_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_description = /** @type {((inputs?: Jams_Mine_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_description(inputs)
	if (locale === "de") return de_jams_mine_description(inputs)
	if (locale === "fr") return fr_jams_mine_description(inputs)
	if (locale === "it") return it_jams_mine_description(inputs)
	if (locale === "nl") return nl_jams_mine_description(inputs)
	if (locale === "pl") return pl_jams_mine_description(inputs)
	if (locale === "pt") return pt_jams_mine_description(inputs)
	if (locale === "ru") return ru_jams_mine_description(inputs)
	if (locale === "sv") return sv_jams_mine_description(inputs)
	if (locale === "tr") return tr_jams_mine_description(inputs)
	if (locale === "zh") return zh_jams_mine_description(inputs)
	if (locale === "ja") return ja_jams_mine_description(inputs)
	return en_jams_mine_description(inputs)
});
