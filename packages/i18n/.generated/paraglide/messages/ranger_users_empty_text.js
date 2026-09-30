/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Empty_TextInputs */

const en_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nobody matches yet.`)
};

const es_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay coincidencias.`)
};

const de_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Treffer.`)
};

const fr_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune correspondance pour l’instant.`)
};

const it_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna corrispondenza.`)
};

const nl_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen resultaten.`)
};

const pl_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak wyników.`)
};

const pt_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma correspondência ainda.`)
};

const ru_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока совпадений нет.`)
};

const sv_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga träffar ännu.`)
};

const tr_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz eşleşme yok.`)
};

const zh_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无匹配结果。`)
};

const ja_ranger_users_empty_text = /** @type {(inputs: Ranger_Users_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ一致するユーザーはいません。`)
};

/**
* | output |
* | --- |
* | "Nobody matches yet." |
*
* @param {Ranger_Users_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_empty_text = /** @type {((inputs?: Ranger_Users_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_empty_text(inputs)
	if (locale === "de") return de_ranger_users_empty_text(inputs)
	if (locale === "fr") return fr_ranger_users_empty_text(inputs)
	if (locale === "it") return it_ranger_users_empty_text(inputs)
	if (locale === "nl") return nl_ranger_users_empty_text(inputs)
	if (locale === "pl") return pl_ranger_users_empty_text(inputs)
	if (locale === "pt") return pt_ranger_users_empty_text(inputs)
	if (locale === "ru") return ru_ranger_users_empty_text(inputs)
	if (locale === "sv") return sv_ranger_users_empty_text(inputs)
	if (locale === "tr") return tr_ranger_users_empty_text(inputs)
	if (locale === "zh") return zh_ranger_users_empty_text(inputs)
	if (locale === "ja") return ja_ranger_users_empty_text(inputs)
	return en_ranger_users_empty_text(inputs)
});
