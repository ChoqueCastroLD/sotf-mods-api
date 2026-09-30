/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_PendingInputs */

const en_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for the rangers. Only you can see it.`)
};

const es_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esperando a los guardabosques. Solo tú puedes verlo.`)
};

const de_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartet auf die Ranger. Nur du kannst ihn sehen.`)
};

const fr_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente des rangers. Vous seul pouvez le voir.`)
};

const it_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa dei ranger. Solo tu puoi vederla.`)
};

const nl_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht op de rangers. Alleen jij kunt hem zien.`)
};

const pl_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czeka na strażników. Tylko ty go widzisz.`)
};

const pt_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando os guardas. Só você pode ver.`)
};

const ru_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ждёт рейнджеров. Видите его только вы.`)
};

const sv_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar på rangers. Bara du kan se den.`)
};

const tr_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucuları bekliyor. Yalnızca sen görebilirsin.`)
};

const zh_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待护林员审核。仅你可见。`)
};

const ja_basecamp_settings_pending = /** @type {(inputs: Basecamp_Settings_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーの審査待ち。あなただけが見られます。`)
};

/**
* | output |
* | --- |
* | "Waiting for the rangers. Only you can see it." |
*
* @param {Basecamp_Settings_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_pending = /** @type {((inputs?: Basecamp_Settings_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_pending(inputs)
	if (locale === "de") return de_basecamp_settings_pending(inputs)
	if (locale === "fr") return fr_basecamp_settings_pending(inputs)
	if (locale === "it") return it_basecamp_settings_pending(inputs)
	if (locale === "nl") return nl_basecamp_settings_pending(inputs)
	if (locale === "pl") return pl_basecamp_settings_pending(inputs)
	if (locale === "pt") return pt_basecamp_settings_pending(inputs)
	if (locale === "ru") return ru_basecamp_settings_pending(inputs)
	if (locale === "sv") return sv_basecamp_settings_pending(inputs)
	if (locale === "tr") return tr_basecamp_settings_pending(inputs)
	if (locale === "zh") return zh_basecamp_settings_pending(inputs)
	if (locale === "ja") return ja_basecamp_settings_pending(inputs)
	return en_basecamp_settings_pending(inputs)
});
