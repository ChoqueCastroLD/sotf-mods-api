/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Ranger_Users_Empty_QueryInputs */

const en_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nobody matches «${i?.query}».`)
};

const es_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nadie coincide con «${i?.query}».`)
};

const de_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niemand passt zu „${i?.query}“.`)
};

const fr_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Personne ne correspond à « ${i?.query} ».`)
};

const it_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessuno corrisponde a «${i?.query}».`)
};

const nl_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niemand komt overeen met ‘${i?.query}’.`)
};

const pl_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nikt nie pasuje do „${i?.query}”.`)
};

const pt_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ninguém corresponde a “${i?.query}”.`)
};

const ru_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Никто не подходит под «${i?.query}».`)
};

const sv_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingen matchar ”${i?.query}”.`)
};

const tr_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” ile eşleşen kimse yok.`)
};

const zh_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有人匹配“${i?.query}”。`)
};

const ja_ranger_users_empty_query = /** @type {(inputs: Ranger_Users_Empty_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」に一致するユーザーはいません。`)
};

/**
* | output |
* | --- |
* | "Nobody matches «{query}»." |
*
* @param {Ranger_Users_Empty_QueryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_empty_query = /** @type {((inputs: Ranger_Users_Empty_QueryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Empty_QueryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_empty_query(inputs)
	if (locale === "de") return de_ranger_users_empty_query(inputs)
	if (locale === "fr") return fr_ranger_users_empty_query(inputs)
	if (locale === "it") return it_ranger_users_empty_query(inputs)
	if (locale === "nl") return nl_ranger_users_empty_query(inputs)
	if (locale === "pl") return pl_ranger_users_empty_query(inputs)
	if (locale === "pt") return pt_ranger_users_empty_query(inputs)
	if (locale === "ru") return ru_ranger_users_empty_query(inputs)
	if (locale === "sv") return sv_ranger_users_empty_query(inputs)
	if (locale === "tr") return tr_ranger_users_empty_query(inputs)
	if (locale === "zh") return zh_ranger_users_empty_query(inputs)
	if (locale === "ja") return ja_ranger_users_empty_query(inputs)
	return en_ranger_users_empty_query(inputs)
});
