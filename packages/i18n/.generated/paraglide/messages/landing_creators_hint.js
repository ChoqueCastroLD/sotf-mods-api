/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Creators_HintInputs */

const en_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The survivors who build the island`)
};

const es_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los supervivientes que construyen la isla`)
};

const de_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Überlebenden, die die Insel bauen`)
};

const fr_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les survivants qui bâtissent l’île`)
};

const it_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I sopravvissuti che costruiscono l’isola`)
};

const nl_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De overlevenden die het eiland bouwen`)
};

const pl_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocaleni, którzy budują wyspę`)
};

const pt_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os sobreviventes que constroem a ilha`)
};

const ru_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выжившие, которые строят остров`)
};

const sv_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevarna som bygger ön`)
};

const tr_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adayı inşa eden hayatta kalanlar`)
};

const zh_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建设这座岛的幸存者们`)
};

const ja_landing_creators_hint = /** @type {(inputs: Landing_Creators_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島を作るサバイバーたち`)
};

/**
* | output |
* | --- |
* | "The survivors who build the island" |
*
* @param {Landing_Creators_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_creators_hint = /** @type {((inputs?: Landing_Creators_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Creators_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_creators_hint(inputs)
	if (locale === "de") return de_landing_creators_hint(inputs)
	if (locale === "fr") return fr_landing_creators_hint(inputs)
	if (locale === "it") return it_landing_creators_hint(inputs)
	if (locale === "nl") return nl_landing_creators_hint(inputs)
	if (locale === "pl") return pl_landing_creators_hint(inputs)
	if (locale === "pt") return pt_landing_creators_hint(inputs)
	if (locale === "ru") return ru_landing_creators_hint(inputs)
	if (locale === "sv") return sv_landing_creators_hint(inputs)
	if (locale === "tr") return tr_landing_creators_hint(inputs)
	if (locale === "zh") return zh_landing_creators_hint(inputs)
	if (locale === "ja") return ja_landing_creators_hint(inputs)
	return en_landing_creators_hint(inputs)
});
