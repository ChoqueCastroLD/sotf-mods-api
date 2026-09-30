/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_List_DescriptionInputs */

const en_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask for the mod you wish existed in Sons of the Forest, vote for the ones you want and follow the creators who take them on.`)
};

const es_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pide el mod que te gustaría tener en Sons of the Forest, vota los que quieres y sigue a los creadores que los adoptan.`)
};

const de_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wünsche dir den Mod, der in Sons of the Forest fehlt, stimme für die, die du willst, und folge den Creators, die sie übernehmen.`)
};

const fr_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demandez le mod qui manque à Sons of the Forest, votez pour ceux que vous voulez et suivez les créateurs qui s’en chargent.`)
};

const it_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi il mod che vorresti in Sons of the Forest, vota quelli che vuoi e segui i creator che li prendono in carico.`)
};

const nl_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vraag de mod die je mist in Sons of the Forest, stem op de mods die je wilt en volg de makers die ze oppakken.`)
};

const pl_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproś o moda, którego brakuje w Sons of the Forest, głosuj na te, które chcesz, i obserwuj twórców, którzy się ich podejmują.`)
};

const pt_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peça o mod que faz falta em Sons of the Forest, vote nos que você quer e siga os criadores que os assumem.`)
};

const ru_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попросите мод, которого не хватает в Sons of the Forest, голосуйте за нужные и следите за авторами, которые берутся за работу.`)
};

const sv_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Be om moddarna du saknar i Sons of the Forest, rösta på dem du vill ha och följ skaparna som tar sig an dem.`)
};

const tr_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest’ta eksik olan modu isteyin, istediklerinize oy verin ve onları üstlenen geliştiricileri takip edin.`)
};

const zh_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提出你希望在 Sons of the Forest 中出现的模组，为想要的请求投票，并关注接手的创作者。`)
};

const ja_requests_list_description = /** @type {(inputs: Requests_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest にほしい MOD をリクエストし、ほしいものに投票して、引き受けたクリエイターをフォローしましょう。`)
};

/**
* | output |
* | --- |
* | "Ask for the mod you wish existed in Sons of the Forest, vote for the ones you want and follow the creators who take them on." |
*
* @param {Requests_List_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_list_description = /** @type {((inputs?: Requests_List_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_List_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_list_description(inputs)
	if (locale === "de") return de_requests_list_description(inputs)
	if (locale === "fr") return fr_requests_list_description(inputs)
	if (locale === "it") return it_requests_list_description(inputs)
	if (locale === "nl") return nl_requests_list_description(inputs)
	if (locale === "pl") return pl_requests_list_description(inputs)
	if (locale === "pt") return pt_requests_list_description(inputs)
	if (locale === "ru") return ru_requests_list_description(inputs)
	if (locale === "sv") return sv_requests_list_description(inputs)
	if (locale === "tr") return tr_requests_list_description(inputs)
	if (locale === "zh") return zh_requests_list_description(inputs)
	if (locale === "ja") return ja_requests_list_description(inputs)
	return en_requests_list_description(inputs)
});
