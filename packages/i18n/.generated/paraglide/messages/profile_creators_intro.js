/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_IntroInputs */

const en_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The survivors who make the island’s mods and builds. Follow them to get a signal when they release something new.`)
};

const es_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los supervivientes que crean los mods y builds de la isla. Síguelos para recibir una señal cuando publiquen algo nuevo.`)
};

const de_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Überlebenden, die die Mods und Builds der Insel erschaffen. Folge ihnen, um ein Signal zu bekommen, wenn sie etwas Neues veröffentlichen.`)
};

const fr_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les survivants qui créent les mods et builds de l’île. Suivez-les pour recevoir un signal à chaque nouveauté.`)
};

const it_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I sopravvissuti che creano le mod e le build dell’isola. Seguili per ricevere un segnale quando pubblicano qualcosa di nuovo.`)
};

const nl_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De overlevenden die de mods en builds van het eiland maken. Volg ze om een signaal te krijgen als ze iets nieuws uitbrengen.`)
};

const pl_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocaleni, którzy tworzą mody i buildy wyspy. Obserwuj ich, aby dostać sygnał, gdy wydadzą coś nowego.`)
};

const pt_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os sobreviventes que criam os mods e builds da ilha. Siga-os para receber um sinal quando publicarem algo novo.`)
};

const ru_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выжившие, которые создают моды и постройки острова. Подпишитесь, чтобы получать сигнал, когда они выпускают что-то новое.`)
};

const sv_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevarna som gör öns moddar och byggen. Följ dem för att få en signal när de släpper något nytt.`)
};

const tr_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adanın modlarını ve yapılarını yapan hayatta kalanlar. Yeni bir şey yayınladıklarında sinyal almak için onları takip et.`)
};

const zh_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为小岛打造模组和建筑的幸存者们。关注他们，有新作发布时就会收到信号。`)
};

const ja_profile_creators_intro = /** @type {(inputs: Profile_Creators_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島の MOD と建築を作るサバイバーたち。フォローすると、新作の公開時にシグナルが届きます。`)
};

/**
* | output |
* | --- |
* | "The survivors who make the island’s mods and builds. Follow them to get a signal when they release something new." |
*
* @param {Profile_Creators_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_intro = /** @type {((inputs?: Profile_Creators_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_intro(inputs)
	if (locale === "de") return de_profile_creators_intro(inputs)
	if (locale === "fr") return fr_profile_creators_intro(inputs)
	if (locale === "it") return it_profile_creators_intro(inputs)
	if (locale === "nl") return nl_profile_creators_intro(inputs)
	if (locale === "pl") return pl_profile_creators_intro(inputs)
	if (locale === "pt") return pt_profile_creators_intro(inputs)
	if (locale === "ru") return ru_profile_creators_intro(inputs)
	if (locale === "sv") return sv_profile_creators_intro(inputs)
	if (locale === "tr") return tr_profile_creators_intro(inputs)
	if (locale === "zh") return zh_profile_creators_intro(inputs)
	if (locale === "ja") return ja_profile_creators_intro(inputs)
	return en_profile_creators_intro(inputs)
});
