/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Viewer_PendingInputs */

const en_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The preview is being generated. Come back in a minute.`)
};

const es_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La vista previa se está generando. Vuelve en un minuto.`)
};

const de_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Vorschau wird erstellt. Komm in einer Minute wieder.`)
};

const fr_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'aperçu est en cours de génération. Reviens dans une minute.`)
};

const it_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'anteprima è in preparazione. Torna tra un minuto.`)
};

const nl_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het voorbeeld wordt gemaakt. Kom over een minuut terug.`)
};

const pl_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd jest generowany. Wróć za minutę.`)
};

const pt_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A pré-visualização está a ser gerada. Volta daqui a um minuto.`)
};

const ru_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Превью создаётся. Загляните через минуту.`)
};

const sv_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsvisningen skapas. Kom tillbaka om en minut.`)
};

const tr_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önizleme hazırlanıyor. Bir dakika sonra tekrar gel.`)
};

const zh_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览正在生成，请一分钟后再来。`)
};

const ja_viewer_pending = /** @type {(inputs: Viewer_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレビューを生成中です。1 分ほどしてからもう一度ご覧ください。`)
};

/**
* | output |
* | --- |
* | "The preview is being generated. Come back in a minute." |
*
* @param {Viewer_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_pending = /** @type {((inputs?: Viewer_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_pending(inputs)
	if (locale === "de") return de_viewer_pending(inputs)
	if (locale === "fr") return fr_viewer_pending(inputs)
	if (locale === "it") return it_viewer_pending(inputs)
	if (locale === "nl") return nl_viewer_pending(inputs)
	if (locale === "pl") return pl_viewer_pending(inputs)
	if (locale === "pt") return pt_viewer_pending(inputs)
	if (locale === "ru") return ru_viewer_pending(inputs)
	if (locale === "sv") return sv_viewer_pending(inputs)
	if (locale === "tr") return tr_viewer_pending(inputs)
	if (locale === "zh") return zh_viewer_pending(inputs)
	if (locale === "ja") return ja_viewer_pending(inputs)
	return en_viewer_pending(inputs)
});
