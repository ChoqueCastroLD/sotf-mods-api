/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_Build_FallbackInputs */

const en_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Without a cover, the build’s thumbnail is used.`)
};

const es_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin portada, se usa la miniatura de la build.`)
};

const de_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ohne Titelbild wird das Vorschaubild des Builds verwendet.`)
};

const fr_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sans couverture, la miniature du build est utilisée.`)
};

const it_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senza copertina si usa la miniatura della build.`)
};

const nl_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zonder omslag wordt de miniatuur van de build gebruikt.`)
};

const pl_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez okładki zostanie użyta miniatura builda.`)
};

const pt_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem capa, é usada a miniatura da build.`)
};

const ru_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без обложки используется миниатюра постройки.`)
};

const sv_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utan omslag används byggets miniatyr.`)
};

const tr_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak yoksa yapının küçük resmi kullanılır.`)
};

const zh_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有封面时使用建筑缩略图。`)
};

const ja_upload_cover_build_fallback = /** @type {(inputs: Upload_Cover_Build_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーがない場合は建築のサムネイルを使います。`)
};

/**
* | output |
* | --- |
* | "Without a cover, the build’s thumbnail is used." |
*
* @param {Upload_Cover_Build_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_build_fallback = /** @type {((inputs?: Upload_Cover_Build_FallbackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_Build_FallbackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_build_fallback(inputs)
	if (locale === "de") return de_upload_cover_build_fallback(inputs)
	if (locale === "fr") return fr_upload_cover_build_fallback(inputs)
	if (locale === "it") return it_upload_cover_build_fallback(inputs)
	if (locale === "nl") return nl_upload_cover_build_fallback(inputs)
	if (locale === "pl") return pl_upload_cover_build_fallback(inputs)
	if (locale === "pt") return pt_upload_cover_build_fallback(inputs)
	if (locale === "ru") return ru_upload_cover_build_fallback(inputs)
	if (locale === "sv") return sv_upload_cover_build_fallback(inputs)
	if (locale === "tr") return tr_upload_cover_build_fallback(inputs)
	if (locale === "zh") return zh_upload_cover_build_fallback(inputs)
	if (locale === "ja") return ja_upload_cover_build_fallback(inputs)
	return en_upload_cover_build_fallback(inputs)
});
