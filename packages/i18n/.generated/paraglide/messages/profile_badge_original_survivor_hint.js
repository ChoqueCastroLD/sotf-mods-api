/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ year: NonNullable<unknown> }} Profile_Badge_Original_Survivor_HintInputs */

const en_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Account created in ${i?.year}, before SOTF Mods v2 launched.`)
};

const es_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cuenta creada en ${i?.year}, antes del lanzamiento de SOTF Mods v2.`)
};

const de_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Konto ${i?.year} erstellt, vor dem Start von SOTF Mods v2.`)
};

const fr_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Compte créé en ${i?.year}, avant le lancement de SOTF Mods v2.`)
};

const it_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Account creato nel ${i?.year}, prima del lancio di SOTF Mods v2.`)
};

const nl_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Account aangemaakt in ${i?.year}, vóór de lancering van SOTF Mods v2.`)
};

const pl_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Konto założone w ${i?.year} roku, przed startem SOTF Mods v2.`)
};

const pt_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conta criada em ${i?.year}, antes do lançamento do SOTF Mods v2.`)
};

const ru_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Аккаунт создан в ${i?.year} году, до запуска SOTF Mods v2.`)
};

const sv_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kontot skapades ${i?.year}, innan SOTF Mods v2 lanserades.`)
};

const tr_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesap ${i?.year} yılında, SOTF Mods v2 yayınlanmadan önce oluşturuldu.`)
};

const zh_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`账号创建于 ${i?.year} 年，早于 SOTF Mods v2 上线。`)
};

const ja_profile_badge_original_survivor_hint = /** @type {(inputs: Profile_Badge_Original_Survivor_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SOTF Mods v2 の公開前、${i?.year} 年に作成されたアカウント。`)
};

/**
* | output |
* | --- |
* | "Account created in {year}, before SOTF Mods v2 launched." |
*
* @param {Profile_Badge_Original_Survivor_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_original_survivor_hint = /** @type {((inputs: Profile_Badge_Original_Survivor_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Original_Survivor_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_original_survivor_hint(inputs)
	if (locale === "de") return de_profile_badge_original_survivor_hint(inputs)
	if (locale === "fr") return fr_profile_badge_original_survivor_hint(inputs)
	if (locale === "it") return it_profile_badge_original_survivor_hint(inputs)
	if (locale === "nl") return nl_profile_badge_original_survivor_hint(inputs)
	if (locale === "pl") return pl_profile_badge_original_survivor_hint(inputs)
	if (locale === "pt") return pt_profile_badge_original_survivor_hint(inputs)
	if (locale === "ru") return ru_profile_badge_original_survivor_hint(inputs)
	if (locale === "sv") return sv_profile_badge_original_survivor_hint(inputs)
	if (locale === "tr") return tr_profile_badge_original_survivor_hint(inputs)
	if (locale === "zh") return zh_profile_badge_original_survivor_hint(inputs)
	if (locale === "ja") return ja_profile_badge_original_survivor_hint(inputs)
	return en_profile_badge_original_survivor_hint(inputs)
});
