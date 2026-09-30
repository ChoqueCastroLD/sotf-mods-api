/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Legacy_Retired_TextInputs */

const en_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every method on these routes answers 410 Gone with this body:`)
};

const es_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier método en estas rutas responde 410 Gone con este cuerpo:`)
};

const de_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Methode auf diesen Routen antwortet mit 410 Gone und diesem Body:`)
};

const fr_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toute méthode sur ces routes répond 410 Gone avec ce corps :`)
};

const it_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi metodo su queste rotte risponde 410 Gone con questo corpo:`)
};

const nl_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke methode op deze routes antwoordt met 410 Gone en deze body:`)
};

const pl_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każda metoda na tych trasach odpowiada 410 Gone z tą treścią:`)
};

const pt_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer método nestas rotas responde 410 Gone com este corpo:`)
};

const ru_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любой метод на этих маршрутах отвечает 410 Gone с таким телом:`)
};

const sv_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla metoder på de här rutterna svarar 410 Gone med den här kroppen:`)
};

const tr_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu rotalardaki her yöntem şu gövdeyle 410 Gone yanıtı verir:`)
};

const zh_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这些路由上的任何方法都会返回 410 Gone 和以下内容：`)
};

const ja_content_dev_legacy_retired_text = /** @type {(inputs: Content_Dev_Legacy_Retired_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これらのルートはどのメソッドでも、次の本文とともに 410 Gone を返します：`)
};

/**
* | output |
* | --- |
* | "Every method on these routes answers 410 Gone with this body:" |
*
* @param {Content_Dev_Legacy_Retired_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_legacy_retired_text = /** @type {((inputs?: Content_Dev_Legacy_Retired_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_Retired_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_legacy_retired_text(inputs)
	if (locale === "de") return de_content_dev_legacy_retired_text(inputs)
	if (locale === "fr") return fr_content_dev_legacy_retired_text(inputs)
	if (locale === "it") return it_content_dev_legacy_retired_text(inputs)
	if (locale === "nl") return nl_content_dev_legacy_retired_text(inputs)
	if (locale === "pl") return pl_content_dev_legacy_retired_text(inputs)
	if (locale === "pt") return pt_content_dev_legacy_retired_text(inputs)
	if (locale === "ru") return ru_content_dev_legacy_retired_text(inputs)
	if (locale === "sv") return sv_content_dev_legacy_retired_text(inputs)
	if (locale === "tr") return tr_content_dev_legacy_retired_text(inputs)
	if (locale === "zh") return zh_content_dev_legacy_retired_text(inputs)
	if (locale === "ja") return ja_content_dev_legacy_retired_text(inputs)
	return en_content_dev_legacy_retired_text(inputs)
});
