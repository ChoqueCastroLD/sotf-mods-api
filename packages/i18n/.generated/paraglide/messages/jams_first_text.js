/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_TextInputs */

const en_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A themed build-off for the whole community: a theme, a few days to make something new, then everyone votes. The date will be announced here first.`)
};

const es_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un concurso temático para toda la comunidad: un tema, unos días para crear algo nuevo y después votamos entre todos. La fecha se anunciará aquí primero.`)
};

const de_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Wettbewerb mit Thema für die ganze Community: ein Thema, ein paar Tage, um etwas Neues zu bauen, dann stimmen alle ab. Das Datum wird zuerst hier bekannt gegeben.`)
};

const fr_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un concours à thème pour toute la communauté : un thème, quelques jours pour créer du neuf, puis tout le monde vote. La date sera annoncée ici en premier.`)
};

const it_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una sfida a tema per tutta la community: un tema, qualche giorno per creare qualcosa di nuovo, poi votano tutti. La data sarà annunciata prima qui.`)
};

const nl_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een thematische bouwwedstrijd voor de hele community: een thema, een paar dagen om iets nieuws te maken en daarna stemt iedereen. De datum maken we eerst hier bekend.`)
};

const pl_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tematyczny konkurs dla całej społeczności: temat, kilka dni na stworzenie czegoś nowego, a potem głosują wszyscy. Datę ogłosimy najpierw tutaj.`)
};

const pt_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma disputa temática para toda a comunidade: um tema, alguns dias para criar algo novo e depois todos votam. A data será anunciada primeiro aqui.`)
};

const ru_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тематический конкурс для всего сообщества: тема, несколько дней, чтобы создать что-то новое, и голосование для всех. Дату сначала объявим здесь.`)
};

const sv_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En tematisk tävling för hela communityn: ett tema, några dagar att skapa något nytt, sedan röstar alla. Datumet tillkännages här först.`)
};

const tr_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm topluluk için temalı bir yarışma: bir tema, yeni bir şey yapmak için birkaç gün, ardından herkes oy verir. Tarih ilk burada duyurulacak.`)
};

const zh_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`面向整个社区的主题创作赛：一个主题，几天时间做出新作品，然后由大家投票。日期将首先在这里公布。`)
};

const ja_jams_first_text = /** @type {(inputs: Jams_First_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティ全員で楽しむテーマ制作イベントです。テーマが発表され、数日で新しい作品を作り、みんなで投票します。日程はまずここで発表します。`)
};

/**
* | output |
* | --- |
* | "A themed build-off for the whole community: a theme, a few days to make something new, then everyone votes. The date will be announced here first." |
*
* @param {Jams_First_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_text = /** @type {((inputs?: Jams_First_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_text(inputs)
	if (locale === "de") return de_jams_first_text(inputs)
	if (locale === "fr") return fr_jams_first_text(inputs)
	if (locale === "it") return it_jams_first_text(inputs)
	if (locale === "nl") return nl_jams_first_text(inputs)
	if (locale === "pl") return pl_jams_first_text(inputs)
	if (locale === "pt") return pt_jams_first_text(inputs)
	if (locale === "ru") return ru_jams_first_text(inputs)
	if (locale === "sv") return sv_jams_first_text(inputs)
	if (locale === "tr") return tr_jams_first_text(inputs)
	if (locale === "zh") return zh_jams_first_text(inputs)
	if (locale === "ja") return ja_jams_first_text(inputs)
	return en_jams_first_text(inputs)
});
