/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Color_BlueprintInputs */

const en_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint (builds)`)
};

const es_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plano (builds)`)
};

const de_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint (Builds)`)
};

const fr_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan (builds)`)
};

const it_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progetto (build)`)
};

const nl_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint (builds)`)
};

const pl_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan (buildy)`)
};

const pt_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planta (builds)`)
};

const ru_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чертёж (постройки)`)
};

const sv_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint (builds)`)
};

const tr_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint (yapılar)`)
};

const zh_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`蓝图（建筑）`)
};

const ja_content_brand_color_blueprint = /** @type {(inputs: Content_Brand_Color_BlueprintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint（ビルド）`)
};

/**
* | output |
* | --- |
* | "Blueprint (builds)" |
*
* @param {Content_Brand_Color_BlueprintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_color_blueprint = /** @type {((inputs?: Content_Brand_Color_BlueprintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Color_BlueprintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_color_blueprint(inputs)
	if (locale === "de") return de_content_brand_color_blueprint(inputs)
	if (locale === "fr") return fr_content_brand_color_blueprint(inputs)
	if (locale === "it") return it_content_brand_color_blueprint(inputs)
	if (locale === "nl") return nl_content_brand_color_blueprint(inputs)
	if (locale === "pl") return pl_content_brand_color_blueprint(inputs)
	if (locale === "pt") return pt_content_brand_color_blueprint(inputs)
	if (locale === "ru") return ru_content_brand_color_blueprint(inputs)
	if (locale === "sv") return sv_content_brand_color_blueprint(inputs)
	if (locale === "tr") return tr_content_brand_color_blueprint(inputs)
	if (locale === "zh") return zh_content_brand_color_blueprint(inputs)
	if (locale === "ja") return ja_content_brand_color_blueprint(inputs)
	return en_content_brand_color_blueprint(inputs)
});
