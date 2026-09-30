/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Fair_Play_Same_NetworkInputs */

const en_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votes and reports between accounts on the same network within 24 hours don’t count.`)
};

const es_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No cuentan los votos ni los reportes entre cuentas de la misma red en 24 horas.`)
};

const de_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimmen und Berichte zwischen Konten aus demselben Netzwerk innerhalb von 24 Stunden zählen nicht.`)
};

const fr_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les votes et rapports entre comptes du même réseau sur 24 heures ne comptent pas.`)
};

const it_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voti e rapporti tra account della stessa rete nell’arco di 24 ore non contano.`)
};

const nl_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen en rapporten tussen accounts op hetzelfde netwerk binnen 24 uur tellen niet.`)
};

const pl_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosy i raporty między kontami z tej samej sieci w ciągu 24 godzin się nie liczą.`)
};

const pt_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votos e relatórios entre contas da mesma rede em 24 horas não contam.`)
};

const ru_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голоса и отчёты между аккаунтами из одной сети в течение 24 часов не учитываются.`)
};

const sv_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röster och rapporter mellan konton på samma nätverk inom 24 timmar räknas inte.`)
};

const tr_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aynı ağdaki hesaplar arasında 24 saat içindeki oylar ve raporlar sayılmaz.`)
};

const zh_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同一网络下的账号在 24 小时内的相互投票和报告不计入。`)
};

const ja_profile_achievements_fair_play_same_network = /** @type {(inputs: Profile_Achievements_Fair_Play_Same_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同じネットワークのアカウント間で 24 時間以内に行われた投票やレポートはカウントされません。`)
};

/**
* | output |
* | --- |
* | "Votes and reports between accounts on the same network within 24 hours don’t count." |
*
* @param {Profile_Achievements_Fair_Play_Same_NetworkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_fair_play_same_network = /** @type {((inputs?: Profile_Achievements_Fair_Play_Same_NetworkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Fair_Play_Same_NetworkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_fair_play_same_network(inputs)
	if (locale === "de") return de_profile_achievements_fair_play_same_network(inputs)
	if (locale === "fr") return fr_profile_achievements_fair_play_same_network(inputs)
	if (locale === "it") return it_profile_achievements_fair_play_same_network(inputs)
	if (locale === "nl") return nl_profile_achievements_fair_play_same_network(inputs)
	if (locale === "pl") return pl_profile_achievements_fair_play_same_network(inputs)
	if (locale === "pt") return pt_profile_achievements_fair_play_same_network(inputs)
	if (locale === "ru") return ru_profile_achievements_fair_play_same_network(inputs)
	if (locale === "sv") return sv_profile_achievements_fair_play_same_network(inputs)
	if (locale === "tr") return tr_profile_achievements_fair_play_same_network(inputs)
	if (locale === "zh") return zh_profile_achievements_fair_play_same_network(inputs)
	if (locale === "ja") return ja_profile_achievements_fair_play_same_network(inputs)
	return en_profile_achievements_fair_play_same_network(inputs)
});
