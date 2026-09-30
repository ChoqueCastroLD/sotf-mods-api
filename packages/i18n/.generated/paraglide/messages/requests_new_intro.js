/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_New_IntroInputs */

const en_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe the mod you wish existed. Creators browse this board and may take your request on.`)
};

const es_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe el mod que te gustaría que existiera. Los creadores revisan este tablón y pueden adoptar tu petición.`)
};

const de_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibe den Mod, den du dir wünschst. Creators durchstöbern diese Liste und können deinen Wunsch übernehmen.`)
};

const fr_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Décrivez le mod dont vous rêvez. Les créateurs parcourent ce tableau et peuvent se charger de votre demande.`)
};

const it_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrivi il mod che vorresti. I creator sfogliano questa bacheca e possono prendere in carico la tua richiesta.`)
};

const nl_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijf de mod die je zou willen. Makers bekijken dit bord en kunnen je verzoek oppakken.`)
};

const pl_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opisz moda, którego ci brakuje. Twórcy przeglądają tę tablicę i mogą podjąć się twojej prośby.`)
};

const pt_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descreva o mod que você gostaria que existisse. Os criadores olham este quadro e podem assumir seu pedido.`)
};

const ru_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опишите мод, которого вам не хватает. Авторы просматривают эту доску и могут взяться за ваш запрос.`)
};

const sv_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskriv modden du önskar att det fanns. Skapare bläddrar här och kan ta sig an ditt önskemål.`)
};

const tr_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olmasını istediğiniz modu anlatın. Geliştiriciler bu panoya göz atar ve isteğinizi üstlenebilir.`)
};

const zh_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述你希望存在的模组。创作者会浏览这里，并可能接手你的请求。`)
};

const ja_requests_new_intro = /** @type {(inputs: Requests_New_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほしい MOD を書いてください。クリエイターがこのボードを見て、引き受けてくれるかもしれません。`)
};

/**
* | output |
* | --- |
* | "Describe the mod you wish existed. Creators browse this board and may take your request on." |
*
* @param {Requests_New_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_new_intro = /** @type {((inputs?: Requests_New_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_New_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_new_intro(inputs)
	if (locale === "de") return de_requests_new_intro(inputs)
	if (locale === "fr") return fr_requests_new_intro(inputs)
	if (locale === "it") return it_requests_new_intro(inputs)
	if (locale === "nl") return nl_requests_new_intro(inputs)
	if (locale === "pl") return pl_requests_new_intro(inputs)
	if (locale === "pt") return pt_requests_new_intro(inputs)
	if (locale === "ru") return ru_requests_new_intro(inputs)
	if (locale === "sv") return sv_requests_new_intro(inputs)
	if (locale === "tr") return tr_requests_new_intro(inputs)
	if (locale === "zh") return zh_requests_new_intro(inputs)
	if (locale === "ja") return ja_requests_new_intro(inputs)
	return en_requests_new_intro(inputs)
});
