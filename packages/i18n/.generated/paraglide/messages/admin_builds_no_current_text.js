/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_No_Current_TextInputs */

const en_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark the latest patch as current: compatibility badges and the Patch Radar need it.`)
};

const es_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marca el último parche como actual: las insignias de compatibilidad y el Radar de parches lo necesitan.`)
};

const de_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markiere den neuesten Patch als aktuell: Kompatibilitätsabzeichen und das Patch-Radar brauchen ihn.`)
};

const fr_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquez le dernier patch comme actuel : les badges de compatibilité et le Radar des patchs en ont besoin.`)
};

const it_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna l’ultima patch come attuale: i badge di compatibilità e il Radar delle patch ne hanno bisogno.`)
};

const nl_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeer de nieuwste patch als huidig: compatibiliteitsbadges en de Patchradar hebben die nodig.`)
};

const pl_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz najnowszą łatkę jako aktualną: potrzebują jej odznaki zgodności i Radar łatek.`)
};

const pt_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marque o patch mais recente como atual: os selos de compatibilidade e o Radar de patches precisam dele.`)
};

const ru_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметьте последний патч как текущий: он нужен значкам совместимости и Радару патчей.`)
};

const sv_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera den senaste patchen som aktuell: kompatibilitetsmärken och Patchradarn behöver den.`)
};

const tr_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En son yamayı güncel olarak işaretle: uyumluluk rozetleri ve Yama Radarı buna ihtiyaç duyar.`)
};

const zh_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请把最新补丁标记为当前版本：兼容性徽章和补丁雷达都需要它。`)
};

const ja_admin_builds_no_current_text = /** @type {(inputs: Admin_Builds_No_Current_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新のパッチを現在のビルドにしてください。互換性バッジとパッチレーダーに必要です。`)
};

/**
* | output |
* | --- |
* | "Mark the latest patch as current: compatibility badges and the Patch Radar need it." |
*
* @param {Admin_Builds_No_Current_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_no_current_text = /** @type {((inputs?: Admin_Builds_No_Current_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_No_Current_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_no_current_text(inputs)
	if (locale === "de") return de_admin_builds_no_current_text(inputs)
	if (locale === "fr") return fr_admin_builds_no_current_text(inputs)
	if (locale === "it") return it_admin_builds_no_current_text(inputs)
	if (locale === "nl") return nl_admin_builds_no_current_text(inputs)
	if (locale === "pl") return pl_admin_builds_no_current_text(inputs)
	if (locale === "pt") return pt_admin_builds_no_current_text(inputs)
	if (locale === "ru") return ru_admin_builds_no_current_text(inputs)
	if (locale === "sv") return sv_admin_builds_no_current_text(inputs)
	if (locale === "tr") return tr_admin_builds_no_current_text(inputs)
	if (locale === "zh") return zh_admin_builds_no_current_text(inputs)
	if (locale === "ja") return ja_admin_builds_no_current_text(inputs)
	return en_admin_builds_no_current_text(inputs)
});
