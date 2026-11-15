/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Comment_PlaceholderInputs */

const en_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask about the modpack or share a tip`)
};

const es_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pregunta sobre el modpack o comparte un consejo`)
};

const de_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frag zum Modpack oder teile einen Tipp`)
};

const fr_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posez une question sur le modpack ou partagez une astuce`)
};

const it_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi del modpack o condividi un consiglio`)
};

const nl_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stel een vraag over de modpack of deel een tip`)
};

const pl_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapytaj o modpack lub podziel się poradą`)
};

const pt_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pergunte sobre o modpack ou compartilhe uma dica`)
};

const ru_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спросите о модпаке или поделитесь советом`)
};

const sv_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fråga om modpaketet eller dela ett tips`)
};

const tr_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketi hakkında soru sor veya bir ipucu paylaş`)
};

const zh_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`询问整合包相关问题或分享技巧`)
};

const ja_modpacks_comment_placeholder = /** @type {(inputs: Modpacks_Comment_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックについて質問するか、ヒントを共有しましょう`)
};

/**
* | output |
* | --- |
* | "Ask about the modpack or share a tip" |
*
* @param {Modpacks_Comment_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_comment_placeholder = /** @type {((inputs?: Modpacks_Comment_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Comment_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_comment_placeholder(inputs)
	if (locale === "de") return de_modpacks_comment_placeholder(inputs)
	if (locale === "fr") return fr_modpacks_comment_placeholder(inputs)
	if (locale === "it") return it_modpacks_comment_placeholder(inputs)
	if (locale === "nl") return nl_modpacks_comment_placeholder(inputs)
	if (locale === "pl") return pl_modpacks_comment_placeholder(inputs)
	if (locale === "pt") return pt_modpacks_comment_placeholder(inputs)
	if (locale === "ru") return ru_modpacks_comment_placeholder(inputs)
	if (locale === "sv") return sv_modpacks_comment_placeholder(inputs)
	if (locale === "tr") return tr_modpacks_comment_placeholder(inputs)
	if (locale === "zh") return zh_modpacks_comment_placeholder(inputs)
	if (locale === "ja") return ja_modpacks_comment_placeholder(inputs)
	return en_modpacks_comment_placeholder(inputs)
});
