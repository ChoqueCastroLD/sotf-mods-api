/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Announce_TextInputs */

const en_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The jam becomes public. Phases keep following the schedule.`)
};

const es_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El jam pasa a ser público. Las fases siguen el calendario.`)
};

const de_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Jam wird öffentlich. Die Phasen folgen weiter dem Zeitplan.`)
};

const fr_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le jam devient public. Les phases continuent de suivre le calendrier.`)
};

const it_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il jam diventa pubblico. Le fasi continuano a seguire il calendario.`)
};

const nl_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De jam wordt openbaar. De fases blijven het schema volgen.`)
};

const pl_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam stanie się publiczny. Fazy nadal podążają za harmonogramem.`)
};

const pt_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A jam fica pública. As fases continuam seguindo o cronograma.`)
};

const ru_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джем станет публичным. Фазы по-прежнему идут по расписанию.`)
};

const sv_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jammen blir offentlig. Faserna följer fortfarande schemat.`)
};

const tr_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam herkese açılır. Aşamalar programı izlemeye devam eder.`)
};

const zh_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam 将公开。各阶段仍按日程自动推进。`)
};

const ja_jams_editor_announce_text = /** @type {(inputs: Jams_Editor_Announce_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムが公開されます。フェーズはこれまでどおりスケジュールに従います。`)
};

/**
* | output |
* | --- |
* | "The jam becomes public. Phases keep following the schedule." |
*
* @param {Jams_Editor_Announce_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_announce_text = /** @type {((inputs?: Jams_Editor_Announce_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Announce_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_announce_text(inputs)
	if (locale === "de") return de_jams_editor_announce_text(inputs)
	if (locale === "fr") return fr_jams_editor_announce_text(inputs)
	if (locale === "it") return it_jams_editor_announce_text(inputs)
	if (locale === "nl") return nl_jams_editor_announce_text(inputs)
	if (locale === "pl") return pl_jams_editor_announce_text(inputs)
	if (locale === "pt") return pt_jams_editor_announce_text(inputs)
	if (locale === "ru") return ru_jams_editor_announce_text(inputs)
	if (locale === "sv") return sv_jams_editor_announce_text(inputs)
	if (locale === "tr") return tr_jams_editor_announce_text(inputs)
	if (locale === "zh") return zh_jams_editor_announce_text(inputs)
	if (locale === "ja") return ja_jams_editor_announce_text(inputs)
	return en_jams_editor_announce_text(inputs)
});
