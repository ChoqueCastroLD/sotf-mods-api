/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Video_HintInputs */

const en_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A showcase or tutorial, shown after the gallery.`)
};

const es_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una demostración o un tutorial; se muestra después de la galería.`)
};

const de_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Showcase oder Tutorial, angezeigt nach der Galerie.`)
};

const fr_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une présentation ou un tutoriel, affiché après la galerie.`)
};

const it_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una presentazione o un tutorial, mostrato dopo la galleria.`)
};

const nl_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een showcase of tutorial, getoond na de galerij.`)
};

const pl_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prezentacja lub poradnik, widoczny pod galerią.`)
};

const pt_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma apresentação ou tutorial, exibido depois da galeria.`)
};

const ru_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор или инструкция, показывается после галереи.`)
};

const sv_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En presentation eller guide, som visas efter galleriet.`)
};

const tr_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Galeriden sonra gösterilen bir tanıtım ya da rehber.`)
};

const zh_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`展示或教程视频，显示在图库之后。`)
};

const ja_upload_video_hint = /** @type {(inputs: Upload_Video_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`紹介やチュートリアルの動画。ギャラリーの後に表示されます。`)
};

/**
* | output |
* | --- |
* | "A showcase or tutorial, shown after the gallery." |
*
* @param {Upload_Video_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_video_hint = /** @type {((inputs?: Upload_Video_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Video_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_video_hint(inputs)
	if (locale === "de") return de_upload_video_hint(inputs)
	if (locale === "fr") return fr_upload_video_hint(inputs)
	if (locale === "it") return it_upload_video_hint(inputs)
	if (locale === "nl") return nl_upload_video_hint(inputs)
	if (locale === "pl") return pl_upload_video_hint(inputs)
	if (locale === "pt") return pt_upload_video_hint(inputs)
	if (locale === "ru") return ru_upload_video_hint(inputs)
	if (locale === "sv") return sv_upload_video_hint(inputs)
	if (locale === "tr") return tr_upload_video_hint(inputs)
	if (locale === "zh") return zh_upload_video_hint(inputs)
	if (locale === "ja") return ja_upload_video_hint(inputs)
	return en_upload_video_hint(inputs)
});
