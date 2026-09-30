/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Back_To_ListInputs */

const en_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the list`)
};

const es_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a la lista`)
};

const de_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zur Liste`)
};

const fr_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à la liste`)
};

const it_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna all’elenco`)
};

const nl_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar de lijst`)
};

const pl_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do listy`)
};

const pt_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar para a lista`)
};

const ru_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад к списку`)
};

const sv_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till listan`)
};

const tr_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listeye dön`)
};

const zh_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回列表`)
};

const ja_ranger_back_to_list = /** @type {(inputs: Ranger_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リストに戻る`)
};

/**
* | output |
* | --- |
* | "Back to the list" |
*
* @param {Ranger_Back_To_ListInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_back_to_list = /** @type {((inputs?: Ranger_Back_To_ListInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Back_To_ListInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_back_to_list(inputs)
	if (locale === "de") return de_ranger_back_to_list(inputs)
	if (locale === "fr") return fr_ranger_back_to_list(inputs)
	if (locale === "it") return it_ranger_back_to_list(inputs)
	if (locale === "nl") return nl_ranger_back_to_list(inputs)
	if (locale === "pl") return pl_ranger_back_to_list(inputs)
	if (locale === "pt") return pt_ranger_back_to_list(inputs)
	if (locale === "ru") return ru_ranger_back_to_list(inputs)
	if (locale === "sv") return sv_ranger_back_to_list(inputs)
	if (locale === "tr") return tr_ranger_back_to_list(inputs)
	if (locale === "zh") return zh_ranger_back_to_list(inputs)
	if (locale === "ja") return ja_ranger_back_to_list(inputs)
	return en_ranger_back_to_list(inputs)
});
