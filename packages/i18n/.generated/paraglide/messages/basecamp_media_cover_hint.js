/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Cover_HintInputs */

const en_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, shown on cards and at the top of the page. A new cover is cropped here before it uploads.`)
};

const es_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, se muestra en las tarjetas y arriba de la página. Una portada nueva se recorta aquí antes de subirla.`)
};

const de_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, auf Karten und oben auf der Seite. Ein neues Titelbild wird hier vor dem Hochladen zugeschnitten.`)
};

const fr_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, affichée sur les cartes et en haut de la page. Une nouvelle couverture est recadrée ici avant l’envoi.`)
};

const it_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, mostrata nelle schede e in cima alla pagina. Una nuova copertina si ritaglia qui prima del caricamento.`)
};

const nl_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, getoond op kaarten en bovenaan de pagina. Een nieuwe omslag wordt hier bijgesneden voor het uploaden.`)
};

const pl_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, widoczna na kartach i na górze strony. Nową okładkę przycinasz tutaj przed wysłaniem.`)
};

const pt_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, exibida nos cards e no topo da página. Uma nova capa é recortada aqui antes do envio.`)
};

const ru_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, показывается в карточках и вверху страницы. Новая обложка обрезается здесь перед загрузкой.`)
};

const sv_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, visas på kort och högst upp på sidan. Ett nytt omslag beskärs här innan det laddas upp.`)
};

const tr_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9, kartlarda ve sayfanın üstünde gösterilir. Yeni bir kapak yüklemeden önce burada kırpılır.`)
};

const zh_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9，显示在卡片和页面顶部。新封面会在上传前在此裁剪。`)
};

const ja_basecamp_media_cover_hint = /** @type {(inputs: Basecamp_Media_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`16:9。カードとページ上部に表示されます。新しいカバーはアップロード前にここで切り抜きます。`)
};

/**
* | output |
* | --- |
* | "16:9, shown on cards and at the top of the page. A new cover is cropped here before it uploads." |
*
* @param {Basecamp_Media_Cover_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_cover_hint = /** @type {((inputs?: Basecamp_Media_Cover_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Cover_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_cover_hint(inputs)
	if (locale === "de") return de_basecamp_media_cover_hint(inputs)
	if (locale === "fr") return fr_basecamp_media_cover_hint(inputs)
	if (locale === "it") return it_basecamp_media_cover_hint(inputs)
	if (locale === "nl") return nl_basecamp_media_cover_hint(inputs)
	if (locale === "pl") return pl_basecamp_media_cover_hint(inputs)
	if (locale === "pt") return pt_basecamp_media_cover_hint(inputs)
	if (locale === "ru") return ru_basecamp_media_cover_hint(inputs)
	if (locale === "sv") return sv_basecamp_media_cover_hint(inputs)
	if (locale === "tr") return tr_basecamp_media_cover_hint(inputs)
	if (locale === "zh") return zh_basecamp_media_cover_hint(inputs)
	if (locale === "ja") return ja_basecamp_media_cover_hint(inputs)
	return en_basecamp_media_cover_hint(inputs)
});
