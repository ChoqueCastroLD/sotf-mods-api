/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Description_PlaceholderInputs */

const en_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What your mod does, how to use it, known issues…`)
};

const es_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué hace tu mod, cómo se usa, problemas conocidos…`)
};

const de_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was dein Mod macht, wie man ihn nutzt, bekannte Probleme…`)
};

const fr_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que fait votre mod, comment l’utiliser, problèmes connus…`)
};

const it_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa fa la tua mod, come si usa, problemi noti…`)
};

const nl_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat je mod doet, hoe je hem gebruikt, bekende problemen…`)
};

const pl_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co robi twój mod, jak go używać, znane problemy…`)
};

const pt_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que seu mod faz, como usar, problemas conhecidos…`)
};

const ru_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что делает ваш мод, как им пользоваться, известные проблемы…`)
};

const sv_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad din mod gör, hur man använder den, kända problem…`)
};

const tr_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modun ne yapar, nasıl kullanılır, bilinen sorunlar…`)
};

const zh_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组能做什么、怎么用、已知问题…`)
};

const ja_upload_description_placeholder = /** @type {(inputs: Upload_Description_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODでできること、使い方、既知の問題…`)
};

/**
* | output |
* | --- |
* | "What your mod does, how to use it, known issues…" |
*
* @param {Upload_Description_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_description_placeholder = /** @type {((inputs?: Upload_Description_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Description_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_description_placeholder(inputs)
	if (locale === "de") return de_upload_description_placeholder(inputs)
	if (locale === "fr") return fr_upload_description_placeholder(inputs)
	if (locale === "it") return it_upload_description_placeholder(inputs)
	if (locale === "nl") return nl_upload_description_placeholder(inputs)
	if (locale === "pl") return pl_upload_description_placeholder(inputs)
	if (locale === "pt") return pt_upload_description_placeholder(inputs)
	if (locale === "ru") return ru_upload_description_placeholder(inputs)
	if (locale === "sv") return sv_upload_description_placeholder(inputs)
	if (locale === "tr") return tr_upload_description_placeholder(inputs)
	if (locale === "zh") return zh_upload_description_placeholder(inputs)
	if (locale === "ja") return ja_upload_description_placeholder(inputs)
	return en_upload_description_placeholder(inputs)
});
