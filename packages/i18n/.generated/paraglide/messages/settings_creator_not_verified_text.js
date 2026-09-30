/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_Not_Verified_TextInputs */

const en_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Rangers verify creators with a track record of safe, maintained mods. Keep publishing — there’s nothing to apply for.`)
};

const es_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los guardabosques verifican a los creadores con un historial de mods seguros y mantenidos. Sigue publicando: no hay que solicitar nada.`)
};

const de_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Ranger verifizieren Creators, die sichere und gepflegte Mods vorweisen können. Veröffentliche einfach weiter – beantragen musst du nichts.`)
};

const fr_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les rangers vérifient les créateurs qui ont publié des mods sûrs et entretenus. Continuez à publier : il n’y a rien à demander.`)
};

const it_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I ranger verificano i creatori con una storia di mod sicure e curate. Continua a pubblicare: non c’è niente da richiedere.`)
};

const nl_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De rangers verifiëren makers met een staat van dienst van veilige, onderhouden mods. Blijf publiceren — je hoeft niets aan te vragen.`)
};

const pl_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strażnicy weryfikują twórców, którzy mają na koncie bezpieczne i utrzymywane mody. Publikuj dalej — nie trzeba o nic wnioskować.`)
};

const pt_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os guardas verificam criadores com histórico de mods seguros e bem mantidos. Continue publicando — não há nada para solicitar.`)
};

const ru_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджеры проверяют авторов с историей безопасных и поддерживаемых модов. Продолжайте публиковать — подавать заявку не нужно.`)
};

const sv_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers verifierar skapare med en historik av säkra, underhållna moddar. Fortsätt publicera — det finns inget att ansöka om.`)
};

const tr_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucular güvenli ve bakımlı modlar geçmişi olan yapımcıları doğrular. Yayımlamaya devam et — başvurman gereken bir şey yok.`)
};

const zh_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员会认证那些持续发布安全、维护良好的模组的创作者。继续发布吧——无需申请。`)
};

const ja_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーは、安全で手入れの行き届いたMODの実績があるクリエイターを認証します。公開を続けてください。申請は不要です。`)
};

/**
* | output |
* | --- |
* | "The Rangers verify creators with a track record of safe, maintained mods. Keep publishing — there’s nothing to apply for." |
*
* @param {Settings_Creator_Not_Verified_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_not_verified_text = /** @type {((inputs?: Settings_Creator_Not_Verified_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_Not_Verified_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_not_verified_text(inputs)
	if (locale === "de") return de_settings_creator_not_verified_text(inputs)
	if (locale === "fr") return fr_settings_creator_not_verified_text(inputs)
	if (locale === "it") return it_settings_creator_not_verified_text(inputs)
	if (locale === "nl") return nl_settings_creator_not_verified_text(inputs)
	if (locale === "pl") return pl_settings_creator_not_verified_text(inputs)
	if (locale === "pt") return pt_settings_creator_not_verified_text(inputs)
	if (locale === "ru") return ru_settings_creator_not_verified_text(inputs)
	if (locale === "sv") return sv_settings_creator_not_verified_text(inputs)
	if (locale === "tr") return tr_settings_creator_not_verified_text(inputs)
	if (locale === "zh") return zh_settings_creator_not_verified_text(inputs)
	if (locale === "ja") return ja_settings_creator_not_verified_text(inputs)
	return en_settings_creator_not_verified_text(inputs)
});
