/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Details_Discovery_HintInputs */

const en_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`They decide where survivors find it in Explore and search.`)
};

const es_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deciden dónde lo encuentran los supervivientes en Explorar y en la búsqueda.`)
};

const de_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie bestimmen, wo Überlebende ihn in Entdecken und der Suche finden.`)
};

const fr_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ils décident où les survivants le trouvent dans Explorer et la recherche.`)
};

const it_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decidono dove i sopravvissuti la trovano in Esplora e nella ricerca.`)
};

const nl_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ze bepalen waar overlevenden hem vinden in Verkennen en zoeken.`)
};

const pl_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Od nich zależy, gdzie ocaleni go znajdą w Odkrywaniu i wyszukiwarce.`)
};

const pt_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elas decidem onde os sobreviventes o encontram em Explorar e na busca.`)
};

const ru_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`От них зависит, где выжившие найдут его в Обзоре и поиске.`)
};

const sv_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De avgör var överlevare hittar den i Utforska och sökningen.`)
};

const tr_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalanların onu Keşfet’te ve aramada nerede bulacağını belirler.`)
};

const zh_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它们决定幸存者在探索和搜索中从哪里找到它。`)
};

const ja_upload_details_discovery_hint = /** @type {(inputs: Upload_Details_Discovery_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバーが探索や検索で見つける場所が決まります。`)
};

/**
* | output |
* | --- |
* | "They decide where survivors find it in Explore and search." |
*
* @param {Upload_Details_Discovery_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_details_discovery_hint = /** @type {((inputs?: Upload_Details_Discovery_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Details_Discovery_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_details_discovery_hint(inputs)
	if (locale === "de") return de_upload_details_discovery_hint(inputs)
	if (locale === "fr") return fr_upload_details_discovery_hint(inputs)
	if (locale === "it") return it_upload_details_discovery_hint(inputs)
	if (locale === "nl") return nl_upload_details_discovery_hint(inputs)
	if (locale === "pl") return pl_upload_details_discovery_hint(inputs)
	if (locale === "pt") return pt_upload_details_discovery_hint(inputs)
	if (locale === "ru") return ru_upload_details_discovery_hint(inputs)
	if (locale === "sv") return sv_upload_details_discovery_hint(inputs)
	if (locale === "tr") return tr_upload_details_discovery_hint(inputs)
	if (locale === "zh") return zh_upload_details_discovery_hint(inputs)
	if (locale === "ja") return ja_upload_details_discovery_hint(inputs)
	return en_upload_details_discovery_hint(inputs)
});
