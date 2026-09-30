/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Force_TextInputs */

const en_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Members who follow the jam are notified and the schedule stays paused until you resume it.`)
};

const es_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se avisa a quienes siguen el jam y el calendario queda en pausa hasta que lo reanudes.`)
};

const de_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mitglieder, die der Jam folgen, werden benachrichtigt, und der Zeitplan bleibt pausiert, bis du ihn fortsetzt.`)
};

const fr_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les membres qui suivent le jam sont notifiés et le calendrier reste en pause jusqu'à sa reprise.`)
};

const it_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I membri che seguono il jam vengono avvisati e il calendario resta in pausa finché non lo riprendi.`)
};

const nl_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leden die de jam volgen krijgen een melding en de planning blijft gepauzeerd tot je hem hervat.`)
};

const pl_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący jam zostaną powiadomieni, a harmonogram pozostanie wstrzymany do jego wznowienia.`)
};

const pt_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quem segue o jam é notificado e o cronograma fica pausado até você retomá-lo.`)
};

const ru_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики джема получат уведомление, а расписание останется приостановленным, пока вы его не возобновите.`)
};

const sv_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medlemmar som följer jammen får en avisering och schemat förblir pausat tills du återupptar det.`)
};

const tr_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam'i takip eden üyelere bildirim gider ve takvim siz sürdürene kadar duraklatılmış kalır.`)
};

const zh_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注该 Jam 的成员会收到通知，日程将保持暂停直至你恢复。`)
};

const ja_jams_editor_force_text = /** @type {(inputs: Jams_Editor_Force_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のメンバーに通知が届き、再開するまでスケジュールは停止したままになります。`)
};

/**
* | output |
* | --- |
* | "Members who follow the jam are notified and the schedule stays paused until you resume it." |
*
* @param {Jams_Editor_Force_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_force_text = /** @type {((inputs?: Jams_Editor_Force_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Force_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_force_text(inputs)
	if (locale === "de") return de_jams_editor_force_text(inputs)
	if (locale === "fr") return fr_jams_editor_force_text(inputs)
	if (locale === "it") return it_jams_editor_force_text(inputs)
	if (locale === "nl") return nl_jams_editor_force_text(inputs)
	if (locale === "pl") return pl_jams_editor_force_text(inputs)
	if (locale === "pt") return pt_jams_editor_force_text(inputs)
	if (locale === "ru") return ru_jams_editor_force_text(inputs)
	if (locale === "sv") return sv_jams_editor_force_text(inputs)
	if (locale === "tr") return tr_jams_editor_force_text(inputs)
	if (locale === "zh") return zh_jams_editor_force_text(inputs)
	if (locale === "ja") return ja_jams_editor_force_text(inputs)
	return en_jams_editor_force_text(inputs)
});
