/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Schedule_Fill_TextInputs */

const en_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcement on the start date, submissions open 3 days later for 14 days, then 7 days of voting. The archive follows 14 days after that.`)
};

const es_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuncio en la fecha de inicio, inscripciones 3 días después durante 14 días y luego 7 días de votación. El archivo llega 14 días más tarde.`)
};

const de_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigung am Starttag, Einreichungen ab 3 Tage später für 14 Tage, danach 7 Tage Abstimmung. Das Archiv folgt 14 Tage danach.`)
};

const fr_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonce à la date de début, inscriptions ouvertes 3 jours plus tard pendant 14 jours, puis 7 jours de vote. L’archivage suit 14 jours après.`)
};

const it_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuncio alla data di inizio, iscrizioni aperte 3 giorni dopo per 14 giorni, poi 7 giorni di voto. L’archivio segue dopo 14 giorni.`)
};

const nl_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondiging op de startdatum, 3 dagen later 14 dagen inzendingen, daarna 7 dagen stemmen. 14 dagen daarna volgt het archief.`)
};

const pl_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszenie w dniu startu, zgłoszenia po 3 dniach przez 14 dni, potem 7 dni głosowania. Archiwum 14 dni później.`)
};

const pt_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anúncio na data de início, inscrições 3 dias depois por 14 dias e depois 7 dias de votação. O arquivo vem 14 dias depois.`)
};

const ru_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявление в день старта, приём работ через 3 дня в течение 14 дней, затем 7 дней голосования. Архив через 14 дней после этого.`)
};

const sv_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonsering på startdatumet, bidrag öppnar 3 dagar senare i 14 dagar, sedan 7 dagars röstning. Arkivet följer 14 dagar efter det.`)
};

const tr_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlangıç tarihinde duyuru, 3 gün sonra 14 gün gönderim, ardından 7 gün oylama. Arşiv bundan 14 gün sonra gelir.`)
};

const zh_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始日公布，3 天后开放投稿 14 天，然后投票 7 天，再过 14 天归档。`)
};

const ja_jams_editor_schedule_fill_text = /** @type {(inputs: Jams_Editor_Schedule_Fill_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開始日に告知し、その 3 日後から 14 日間応募を受け付け、続けて 7 日間投票します。その 14 日後にアーカイブされます。`)
};

/**
* | output |
* | --- |
* | "Announcement on the start date, submissions open 3 days later for 14 days, then 7 days of voting. The archive follows 14 days after that." |
*
* @param {Jams_Editor_Schedule_Fill_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_schedule_fill_text = /** @type {((inputs?: Jams_Editor_Schedule_Fill_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_Fill_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_schedule_fill_text(inputs)
	if (locale === "de") return de_jams_editor_schedule_fill_text(inputs)
	if (locale === "fr") return fr_jams_editor_schedule_fill_text(inputs)
	if (locale === "it") return it_jams_editor_schedule_fill_text(inputs)
	if (locale === "nl") return nl_jams_editor_schedule_fill_text(inputs)
	if (locale === "pl") return pl_jams_editor_schedule_fill_text(inputs)
	if (locale === "pt") return pt_jams_editor_schedule_fill_text(inputs)
	if (locale === "ru") return ru_jams_editor_schedule_fill_text(inputs)
	if (locale === "sv") return sv_jams_editor_schedule_fill_text(inputs)
	if (locale === "tr") return tr_jams_editor_schedule_fill_text(inputs)
	if (locale === "zh") return zh_jams_editor_schedule_fill_text(inputs)
	if (locale === "ja") return ja_jams_editor_schedule_fill_text(inputs)
	return en_jams_editor_schedule_fill_text(inputs)
});
