/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Empty_TextInputs */

const en_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow mods and creators to be notified when something changes.`)
};

const es_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue mods y creadores para recibir un aviso cuando algo cambie.`)
};

const de_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folge Mods und Creators, um benachrichtigt zu werden, wenn sich etwas ändert.`)
};

const fr_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivez des mods et des créateurs pour être averti quand quelque chose change.`)
};

const it_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui mod e creatori per ricevere una notifica quando qualcosa cambia.`)
};

const nl_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volg mods en makers om een melding te krijgen wanneer er iets verandert.`)
};

const pl_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj mody i twórców, aby dostawać powiadomienia o zmianach.`)
};

const pt_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siga mods e criadores para ser avisado quando algo mudar.`)
};

const ru_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписывайтесь на моды и авторов, чтобы получать уведомления об изменениях.`)
};

const sv_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ moddar och skapare för att få en avisering när något ändras.`)
};

const tr_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir şey değiştiğinde bildirim almak için modları ve yapımcıları takip et.`)
};

const zh_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注模组和创作者，有变化时会通知你。`)
};

const ja_signals_empty_text = /** @type {(inputs: Signals_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODやクリエイターをフォローすると、変化があったときに通知されます。`)
};

/**
* | output |
* | --- |
* | "Follow mods and creators to be notified when something changes." |
*
* @param {Signals_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_empty_text = /** @type {((inputs?: Signals_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_empty_text(inputs)
	if (locale === "de") return de_signals_empty_text(inputs)
	if (locale === "fr") return fr_signals_empty_text(inputs)
	if (locale === "it") return it_signals_empty_text(inputs)
	if (locale === "nl") return nl_signals_empty_text(inputs)
	if (locale === "pl") return pl_signals_empty_text(inputs)
	if (locale === "pt") return pt_signals_empty_text(inputs)
	if (locale === "ru") return ru_signals_empty_text(inputs)
	if (locale === "sv") return sv_signals_empty_text(inputs)
	if (locale === "tr") return tr_signals_empty_text(inputs)
	if (locale === "zh") return zh_signals_empty_text(inputs)
	if (locale === "ja") return ja_signals_empty_text(inputs)
	return en_signals_empty_text(inputs)
});
