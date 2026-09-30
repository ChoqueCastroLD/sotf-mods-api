/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Art_Benefit_CommunityInputs */

const en_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate, review and build Kits`)
};

const es_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valora, reseña y crea Kits`)
};

const de_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewerte, rezensiere und stell Kits zusammen`)
};

const fr_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notez, donnez votre avis et créez des Kits`)
};

const it_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vota, recensisci e crea Kit`)
};

const nl_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordeel, recenseer en stel Kits samen`)
};

const pl_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oceniaj, recenzuj i twórz zestawy`)
};

const pt_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avalie, escreva análises e monte Kits`)
};

const ru_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оценивайте, пишите отзывы и собирайте наборы`)
};

const sv_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betygsätt, recensera och bygg kit`)
};

const tr_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puan ver, inceleme yaz ve Kitler oluştur`)
};

const zh_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分、写评测、组建套装`)
};

const ja_auth_art_benefit_community = /** @type {(inputs: Auth_Art_Benefit_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価やレビューをして、キットを作る`)
};

/**
* | output |
* | --- |
* | "Rate, review and build Kits" |
*
* @param {Auth_Art_Benefit_CommunityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_art_benefit_community = /** @type {((inputs?: Auth_Art_Benefit_CommunityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Art_Benefit_CommunityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_art_benefit_community(inputs)
	if (locale === "de") return de_auth_art_benefit_community(inputs)
	if (locale === "fr") return fr_auth_art_benefit_community(inputs)
	if (locale === "it") return it_auth_art_benefit_community(inputs)
	if (locale === "nl") return nl_auth_art_benefit_community(inputs)
	if (locale === "pl") return pl_auth_art_benefit_community(inputs)
	if (locale === "pt") return pt_auth_art_benefit_community(inputs)
	if (locale === "ru") return ru_auth_art_benefit_community(inputs)
	if (locale === "sv") return sv_auth_art_benefit_community(inputs)
	if (locale === "tr") return tr_auth_art_benefit_community(inputs)
	if (locale === "zh") return zh_auth_art_benefit_community(inputs)
	if (locale === "ja") return ja_auth_art_benefit_community(inputs)
	return en_auth_art_benefit_community(inputs)
});
