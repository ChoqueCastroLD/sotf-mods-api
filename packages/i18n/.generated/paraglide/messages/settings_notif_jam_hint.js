/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Jam_HintInputs */

const en_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A jam you follow or entered opens submissions, opens voting or publishes its results.`)
};

const es_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una jam que sigues o en la que participas abre las entradas, abre la votación o publica sus resultados.`)
};

const de_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Jam, der du folgst oder bei der du mitmachst, öffnet Einreichungen, startet die Abstimmung oder veröffentlicht die Ergebnisse.`)
};

const fr_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une jam que vous suivez ou à laquelle vous participez ouvre les participations, le vote ou publie ses résultats.`)
};

const it_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una jam che segui o a cui partecipi apre le iscrizioni, apre le votazioni o pubblica i risultati.`)
};

const nl_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een jam die je volgt of waaraan je meedoet opent inzendingen, opent het stemmen of publiceert de resultaten.`)
};

const pl_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam, którą obserwujesz lub w której bierzesz udział, otwiera zgłoszenia, głosowanie lub publikuje wyniki.`)
};

const pt_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma jam que você segue ou em que participa abre as inscrições, abre a votação ou publica os resultados.`)
};

const ru_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джем, за которым вы следите или в котором участвуете, открывает приём работ, голосование или публикует результаты.`)
};

const sv_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En jam du följer eller deltar i öppnar bidrag, öppnar röstning eller publicerar resultat.`)
};

const tr_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiğin ya da katıldığın bir jam katılımları açtığında, oylamayı başlattığında veya sonuçları yayımladığında.`)
};

const zh_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注或参加的 jam 开放投稿、开放投票或公布结果时。`)
};

const ja_settings_notif_jam_hint = /** @type {(inputs: Settings_Notif_Jam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォローまたは参加中のジャムがエントリー受付・投票を開始したとき、または結果を発表したとき。`)
};

/**
* | output |
* | --- |
* | "A jam you follow or entered opens submissions, opens voting or publishes its results." |
*
* @param {Settings_Notif_Jam_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_jam_hint = /** @type {((inputs?: Settings_Notif_Jam_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Jam_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_jam_hint(inputs)
	if (locale === "de") return de_settings_notif_jam_hint(inputs)
	if (locale === "fr") return fr_settings_notif_jam_hint(inputs)
	if (locale === "it") return it_settings_notif_jam_hint(inputs)
	if (locale === "nl") return nl_settings_notif_jam_hint(inputs)
	if (locale === "pl") return pl_settings_notif_jam_hint(inputs)
	if (locale === "pt") return pt_settings_notif_jam_hint(inputs)
	if (locale === "ru") return ru_settings_notif_jam_hint(inputs)
	if (locale === "sv") return sv_settings_notif_jam_hint(inputs)
	if (locale === "tr") return tr_settings_notif_jam_hint(inputs)
	if (locale === "zh") return zh_settings_notif_jam_hint(inputs)
	if (locale === "ja") return ja_settings_notif_jam_hint(inputs)
	return en_settings_notif_jam_hint(inputs)
});
