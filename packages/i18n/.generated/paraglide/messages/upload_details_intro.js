/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Details_IntroInputs */

const en_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How your listing appears on the site. We filled in what the file contained.`)
};

const es_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo se verá tu ficha en la web. Rellenamos lo que contenía el archivo.`)
};

const de_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So erscheint dein Eintrag auf der Seite. Was die Datei enthielt, haben wir schon eingetragen.`)
};

const fr_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que les joueurs liront sur le site. Nous avons prérempli ce que contenait le fichier.`)
};

const it_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come apparirà la tua scheda sul sito. Abbiamo precompilato ciò che conteneva il file.`)
};

const nl_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo verschijnt je vermelding op de site. Wat het bestand bevatte, is al ingevuld.`)
};

const pl_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tak twój wpis będzie wyglądał na stronie. Uzupełniliśmy to, co zawierał plik.`)
};

const pt_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como sua ficha aparece no site. Já preenchemos o que o arquivo continha.`)
};

const ru_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Так ваша карточка будет выглядеть на сайте. Мы заполнили то, что было в файле.`)
};

const sv_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så här visas din sida på webbplatsen. Vi har fyllt i det filen innehöll.`)
};

const tr_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfanın sitede nasıl görüneceği. Dosyada bulduklarımızı önceden doldurduk.`)
};

const zh_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这是你的页面在网站上的呈现方式。我们已根据文件内容预先填写了部分信息。`)
};

const ja_upload_details_intro = /** @type {(inputs: Upload_Details_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイト上でのページの見え方です。ファイルから読み取れた内容は入力済みです。`)
};

/**
* | output |
* | --- |
* | "How your listing appears on the site. We filled in what the file contained." |
*
* @param {Upload_Details_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_details_intro = /** @type {((inputs?: Upload_Details_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Details_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_details_intro(inputs)
	if (locale === "de") return de_upload_details_intro(inputs)
	if (locale === "fr") return fr_upload_details_intro(inputs)
	if (locale === "it") return it_upload_details_intro(inputs)
	if (locale === "nl") return nl_upload_details_intro(inputs)
	if (locale === "pl") return pl_upload_details_intro(inputs)
	if (locale === "pt") return pt_upload_details_intro(inputs)
	if (locale === "ru") return ru_upload_details_intro(inputs)
	if (locale === "sv") return sv_upload_details_intro(inputs)
	if (locale === "tr") return tr_upload_details_intro(inputs)
	if (locale === "zh") return zh_upload_details_intro(inputs)
	if (locale === "ja") return ja_upload_details_intro(inputs)
	return en_upload_details_intro(inputs)
});
