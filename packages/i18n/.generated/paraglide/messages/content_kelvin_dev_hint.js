/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Dev_HintInputs */

const en_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building something similar? The endpoint is part of the legacy API:`)
};

const es_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Construyes algo parecido? El endpoint forma parte de la API legacy:`)
};

const de_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baust du etwas Ähnliches? Der Endpunkt gehört zur Legacy-API:`)
};

const fr_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous construisez quelque chose de similaire ? L’endpoint fait partie de l’API historique :`)
};

const it_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stai costruendo qualcosa di simile? L’endpoint fa parte dell’API legacy:`)
};

const nl_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouw je iets vergelijkbaars? Het endpoint hoort bij de legacy-API:`)
};

const pl_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budujesz coś podobnego? Endpoint jest częścią starszego API:`)
};

const pt_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construindo algo parecido? O endpoint faz parte da API legada:`)
};

const ru_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Делаете что-то похожее? Эндпоинт входит в старый API:`)
};

const sv_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygger du något liknande? Slutpunkten ingår i det äldre API:t:`)
};

const tr_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benzer bir şey mi yapıyorsun? Uç nokta eski API’nin parçası:`)
};

const zh_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在做类似的东西？该接口属于旧版 API：`)
};

const ja_content_kelvin_dev_hint = /** @type {(inputs: Content_Kelvin_Dev_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`似たものを作っていますか？このエンドポイントは旧 API の一部です：`)
};

/**
* | output |
* | --- |
* | "Building something similar? The endpoint is part of the legacy API:" |
*
* @param {Content_Kelvin_Dev_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_dev_hint = /** @type {((inputs?: Content_Kelvin_Dev_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Dev_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_dev_hint(inputs)
	if (locale === "de") return de_content_kelvin_dev_hint(inputs)
	if (locale === "fr") return fr_content_kelvin_dev_hint(inputs)
	if (locale === "it") return it_content_kelvin_dev_hint(inputs)
	if (locale === "nl") return nl_content_kelvin_dev_hint(inputs)
	if (locale === "pl") return pl_content_kelvin_dev_hint(inputs)
	if (locale === "pt") return pt_content_kelvin_dev_hint(inputs)
	if (locale === "ru") return ru_content_kelvin_dev_hint(inputs)
	if (locale === "sv") return sv_content_kelvin_dev_hint(inputs)
	if (locale === "tr") return tr_content_kelvin_dev_hint(inputs)
	if (locale === "zh") return zh_content_kelvin_dev_hint(inputs)
	if (locale === "ja") return ja_content_kelvin_dev_hint(inputs)
	return en_content_kelvin_dev_hint(inputs)
});
