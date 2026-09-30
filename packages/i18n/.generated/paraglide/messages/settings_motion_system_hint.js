/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Motion_System_HintInputs */

const en_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follows the reduced-motion setting of your system.`)
};

const es_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue el ajuste de movimiento reducido de tu sistema.`)
};

const de_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folgt der Einstellung „Bewegung reduzieren“ deines Systems.`)
};

const fr_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suit le réglage de réduction des animations de votre système.`)
};

const it_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segue l’impostazione di riduzione del movimento del sistema.`)
};

const nl_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgt de instelling voor minder beweging van je systeem.`)
};

const pl_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgodnie z ustawieniem ograniczenia ruchu w systemie.`)
};

const pt_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segue a configuração de movimento reduzido do seu sistema.`)
};

const ru_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следует системной настройке уменьшения движения.`)
};

const sv_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följer systemets inställning för minskad rörelse.`)
};

const tr_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sisteminin hareketi azaltma ayarını izler.`)
};

const zh_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`遵循系统的减少动态效果设置。`)
};

const ja_settings_motion_system_hint = /** @type {(inputs: Settings_Motion_System_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システムの「視差効果を減らす」設定に従います。`)
};

/**
* | output |
* | --- |
* | "Follows the reduced-motion setting of your system." |
*
* @param {Settings_Motion_System_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_motion_system_hint = /** @type {((inputs?: Settings_Motion_System_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Motion_System_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_motion_system_hint(inputs)
	if (locale === "de") return de_settings_motion_system_hint(inputs)
	if (locale === "fr") return fr_settings_motion_system_hint(inputs)
	if (locale === "it") return it_settings_motion_system_hint(inputs)
	if (locale === "nl") return nl_settings_motion_system_hint(inputs)
	if (locale === "pl") return pl_settings_motion_system_hint(inputs)
	if (locale === "pt") return pt_settings_motion_system_hint(inputs)
	if (locale === "ru") return ru_settings_motion_system_hint(inputs)
	if (locale === "sv") return sv_settings_motion_system_hint(inputs)
	if (locale === "tr") return tr_settings_motion_system_hint(inputs)
	if (locale === "zh") return zh_settings_motion_system_hint(inputs)
	if (locale === "ja") return ja_settings_motion_system_hint(inputs)
	return en_settings_motion_system_hint(inputs)
});
