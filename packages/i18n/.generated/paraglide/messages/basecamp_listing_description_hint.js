/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Description_HintInputs */

const en_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. What it does, how to use it, known issues. 300 characters or more help players decide.`)
};

const es_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Qué hace, cómo se usa, problemas conocidos. Con 300 caracteres o más los jugadores deciden mejor.`)
};

const de_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Was er tut, wie man ihn nutzt, bekannte Probleme. Ab 300 Zeichen fällt Spielern die Entscheidung leichter.`)
};

const fr_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Ce qu’il fait, comment l’utiliser, problèmes connus. À partir de 300 caractères, les joueurs se décident plus facilement.`)
};

const it_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Cosa fa, come si usa, problemi noti. Con 300 caratteri o più i giocatori decidono meglio.`)
};

const nl_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Wat hij doet, hoe je hem gebruikt, bekende problemen. Met 300 tekens of meer kiezen spelers makkelijker.`)
};

const pl_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Co robi, jak go używać, znane problemy. Od 300 znaków graczom łatwiej się zdecydować.`)
};

const pt_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. O que faz, como usar, problemas conhecidos. Com 300 caracteres ou mais os jogadores decidem melhor.`)
};

const ru_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Что делает мод, как им пользоваться, известные проблемы. От 300 символов игрокам проще решиться.`)
};

const sv_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Vad den gör, hur man använder den, kända problem. Med 300 tecken eller fler är det lättare för spelare att bestämma sig.`)
};

const tr_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Ne yaptığı, nasıl kullanıldığı, bilinen sorunlar. 300 karakter ve üzeri oyuncuların karar vermesini kolaylaştırır.`)
};

const zh_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持 Markdown。写明功能、用法和已知问题。300 字以上更能帮助玩家做决定。`)
};

const ja_basecamp_listing_description_hint = /** @type {(inputs: Basecamp_Listing_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown 対応。何ができるか、使い方、既知の問題。300 文字以上あるとプレイヤーが判断しやすくなります。`)
};

/**
* | output |
* | --- |
* | "Markdown. What it does, how to use it, known issues. 300 characters or more help players decide." |
*
* @param {Basecamp_Listing_Description_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_description_hint = /** @type {((inputs?: Basecamp_Listing_Description_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Description_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_description_hint(inputs)
	if (locale === "de") return de_basecamp_listing_description_hint(inputs)
	if (locale === "fr") return fr_basecamp_listing_description_hint(inputs)
	if (locale === "it") return it_basecamp_listing_description_hint(inputs)
	if (locale === "nl") return nl_basecamp_listing_description_hint(inputs)
	if (locale === "pl") return pl_basecamp_listing_description_hint(inputs)
	if (locale === "pt") return pt_basecamp_listing_description_hint(inputs)
	if (locale === "ru") return ru_basecamp_listing_description_hint(inputs)
	if (locale === "sv") return sv_basecamp_listing_description_hint(inputs)
	if (locale === "tr") return tr_basecamp_listing_description_hint(inputs)
	if (locale === "zh") return zh_basecamp_listing_description_hint(inputs)
	if (locale === "ja") return ja_basecamp_listing_description_hint(inputs)
	return en_basecamp_listing_description_hint(inputs)
});
