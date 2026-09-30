/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, count: NonNullable<unknown>, downloadsCount: NonNullable<unknown>, downloads: NonNullable<unknown>, followers: NonNullable<unknown> }} Profile_Meta_Description_CreatorInputs */

const en_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	const downloadsCount__plural = registry.plural("en", i?.downloadsCount, {});
	const followers__plural = registry.plural("en", i?.followers, {});
	const followers__number = registry.number("en", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} makes Sons of the Forest mods: ${count__number} mod or build, ${i?.downloads} download, ${followers__number} follower. Free downloads on SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} makes Sons of the Forest mods: ${count__number} mod or build, ${i?.downloads} download, ${followers__number} followers. Free downloads on SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} makes Sons of the Forest mods: ${count__number} mod or build, ${i?.downloads} downloads, ${followers__number} follower. Free downloads on SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} makes Sons of the Forest mods: ${count__number} mod or build, ${i?.downloads} downloads, ${followers__number} followers. Free downloads on SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} makes Sons of the Forest mods: ${count__number} mods and builds, ${i?.downloads} download, ${followers__number} follower. Free downloads on SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} makes Sons of the Forest mods: ${count__number} mods and builds, ${i?.downloads} download, ${followers__number} followers. Free downloads on SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} makes Sons of the Forest mods: ${count__number} mods and builds, ${i?.downloads} downloads, ${followers__number} follower. Free downloads on SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} makes Sons of the Forest mods: ${count__number} mods and builds, ${i?.downloads} downloads, ${followers__number} followers. Free downloads on SOTF Mods.`)
	
};

const es_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	const downloadsCount__plural = registry.plural("es", i?.downloadsCount, {});
	const followers__plural = registry.plural("es", i?.followers, {});
	const followers__number = registry.number("es", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mods de Sons of the Forest: ${count__number} mod o build, ${i?.downloads} descarga, ${followers__number} seguidor. Descargas gratis en SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mods de Sons of the Forest: ${count__number} mod o build, ${i?.downloads} descarga, ${followers__number} seguidores. Descargas gratis en SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mods de Sons of the Forest: ${count__number} mod o build, ${i?.downloads} descargas, ${followers__number} seguidor. Descargas gratis en SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mods de Sons of the Forest: ${count__number} mod o build, ${i?.downloads} descargas, ${followers__number} seguidores. Descargas gratis en SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mods de Sons of the Forest: ${count__number} mods y builds, ${i?.downloads} descarga, ${followers__number} seguidor. Descargas gratis en SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mods de Sons of the Forest: ${count__number} mods y builds, ${i?.downloads} descarga, ${followers__number} seguidores. Descargas gratis en SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mods de Sons of the Forest: ${count__number} mods y builds, ${i?.downloads} descargas, ${followers__number} seguidor. Descargas gratis en SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} crea mods de Sons of the Forest: ${count__number} mods y builds, ${i?.downloads} descargas, ${followers__number} seguidores. Descargas gratis en SOTF Mods.`)
	
};

const de_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	const downloadsCount__plural = registry.plural("de", i?.downloadsCount, {});
	const followers__plural = registry.plural("de", i?.followers, {});
	const followers__number = registry.number("de", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} erstellt Mods für Sons of the Forest: ${count__number} Mod oder Build, ${i?.downloads} Download, ${followers__number} Follower. Kostenlose Downloads auf SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} erstellt Mods für Sons of the Forest: ${count__number} Mod oder Build, ${i?.downloads} Download, ${followers__number} Follower. Kostenlose Downloads auf SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} erstellt Mods für Sons of the Forest: ${count__number} Mod oder Build, ${i?.downloads} Downloads, ${followers__number} Follower. Kostenlose Downloads auf SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} erstellt Mods für Sons of the Forest: ${count__number} Mod oder Build, ${i?.downloads} Downloads, ${followers__number} Follower. Kostenlose Downloads auf SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} erstellt Mods für Sons of the Forest: ${count__number} Mods und Builds, ${i?.downloads} Download, ${followers__number} Follower. Kostenlose Downloads auf SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} erstellt Mods für Sons of the Forest: ${count__number} Mods und Builds, ${i?.downloads} Download, ${followers__number} Follower. Kostenlose Downloads auf SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} erstellt Mods für Sons of the Forest: ${count__number} Mods und Builds, ${i?.downloads} Downloads, ${followers__number} Follower. Kostenlose Downloads auf SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} erstellt Mods für Sons of the Forest: ${count__number} Mods und Builds, ${i?.downloads} Downloads, ${followers__number} Follower. Kostenlose Downloads auf SOTF Mods.`)
	
};

const fr_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	const downloadsCount__plural = registry.plural("fr", i?.downloadsCount, {});
	const followers__plural = registry.plural("fr", i?.followers, {});
	const followers__number = registry.number("fr", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crée des mods pour Sons of the Forest : ${count__number} mod ou build, ${i?.downloads} téléchargement, ${followers__number} abonné. Téléchargements gratuits sur SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crée des mods pour Sons of the Forest : ${count__number} mod ou build, ${i?.downloads} téléchargement, ${followers__number} abonnés. Téléchargements gratuits sur SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crée des mods pour Sons of the Forest : ${count__number} mod ou build, ${i?.downloads} téléchargements, ${followers__number} abonné. Téléchargements gratuits sur SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crée des mods pour Sons of the Forest : ${count__number} mod ou build, ${i?.downloads} téléchargements, ${followers__number} abonnés. Téléchargements gratuits sur SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crée des mods pour Sons of the Forest : ${count__number} mods et builds, ${i?.downloads} téléchargement, ${followers__number} abonné. Téléchargements gratuits sur SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crée des mods pour Sons of the Forest : ${count__number} mods et builds, ${i?.downloads} téléchargement, ${followers__number} abonnés. Téléchargements gratuits sur SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crée des mods pour Sons of the Forest : ${count__number} mods et builds, ${i?.downloads} téléchargements, ${followers__number} abonné. Téléchargements gratuits sur SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} crée des mods pour Sons of the Forest : ${count__number} mods et builds, ${i?.downloads} téléchargements, ${followers__number} abonnés. Téléchargements gratuits sur SOTF Mods.`)
	
};

const it_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	const downloadsCount__plural = registry.plural("it", i?.downloadsCount, {});
	const followers__plural = registry.plural("it", i?.followers, {});
	const followers__number = registry.number("it", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mod per Sons of the Forest: ${count__number} mod o build, ${i?.downloads} download, ${followers__number} follower. Download gratuiti su SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mod per Sons of the Forest: ${count__number} mod o build, ${i?.downloads} download, ${followers__number} follower. Download gratuiti su SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mod per Sons of the Forest: ${count__number} mod o build, ${i?.downloads} download, ${followers__number} follower. Download gratuiti su SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mod per Sons of the Forest: ${count__number} mod o build, ${i?.downloads} download, ${followers__number} follower. Download gratuiti su SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mod per Sons of the Forest: ${count__number} mod e build, ${i?.downloads} download, ${followers__number} follower. Download gratuiti su SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mod per Sons of the Forest: ${count__number} mod e build, ${i?.downloads} download, ${followers__number} follower. Download gratuiti su SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} crea mod per Sons of the Forest: ${count__number} mod e build, ${i?.downloads} download, ${followers__number} follower. Download gratuiti su SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} crea mod per Sons of the Forest: ${count__number} mod e build, ${i?.downloads} download, ${followers__number} follower. Download gratuiti su SOTF Mods.`)
	
};

const nl_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	const downloadsCount__plural = registry.plural("nl", i?.downloadsCount, {});
	const followers__plural = registry.plural("nl", i?.followers, {});
	const followers__number = registry.number("nl", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} maakt mods voor Sons of the Forest: ${count__number} mod of build, ${i?.downloads} download, ${followers__number} volger. Gratis downloads op SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} maakt mods voor Sons of the Forest: ${count__number} mod of build, ${i?.downloads} download, ${followers__number} volgers. Gratis downloads op SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} maakt mods voor Sons of the Forest: ${count__number} mod of build, ${i?.downloads} downloads, ${followers__number} volger. Gratis downloads op SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} maakt mods voor Sons of the Forest: ${count__number} mod of build, ${i?.downloads} downloads, ${followers__number} volgers. Gratis downloads op SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} maakt mods voor Sons of the Forest: ${count__number} mods en builds, ${i?.downloads} download, ${followers__number} volger. Gratis downloads op SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} maakt mods voor Sons of the Forest: ${count__number} mods en builds, ${i?.downloads} download, ${followers__number} volgers. Gratis downloads op SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} maakt mods voor Sons of the Forest: ${count__number} mods en builds, ${i?.downloads} downloads, ${followers__number} volger. Gratis downloads op SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} maakt mods voor Sons of the Forest: ${count__number} mods en builds, ${i?.downloads} downloads, ${followers__number} volgers. Gratis downloads op SOTF Mods.`)
	
};

const pl_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	const downloadsCount__plural = registry.plural("pl", i?.downloadsCount, {});
	const followers__plural = registry.plural("pl", i?.followers, {});
	const followers__number = registry.number("pl", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobranie, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobranie, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobranie, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobranie, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrania, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrania, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrań, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrań, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrań, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrań, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrania, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mod lub build, ${i?.downloads} pobrania, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobranie, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobranie, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobranie, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobranie, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrania, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrania, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrań, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrań, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrań, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrań, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrania, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} mody i buildy, ${i?.downloads} pobrania, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobranie, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobranie, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobranie, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobranie, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrania, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrania, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrań, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrań, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrań, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrań, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrania, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modów i buildów, ${i?.downloads} pobrania, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobranie, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobranie, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobranie, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobranie, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrania, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrania, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrań, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrań, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrań, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (downloadsCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrań, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrania, ${followers__number} obserwujący. Darmowe pobieranie na SOTF Mods.`);
	if (followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	if (followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrania, ${followers__number} obserwujących. Darmowe pobieranie na SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} tworzy mody do Sons of the Forest: ${count__number} modu i buildu, ${i?.downloads} pobrania, ${followers__number} obserwującego. Darmowe pobieranie na SOTF Mods.`)
	
};

const pt_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	const downloadsCount__plural = registry.plural("pt", i?.downloadsCount, {});
	const followers__plural = registry.plural("pt", i?.followers, {});
	const followers__number = registry.number("pt", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} cria mods para Sons of the Forest: ${count__number} mod ou build, ${i?.downloads} download, ${followers__number} seguidor. Downloads grátis no SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} cria mods para Sons of the Forest: ${count__number} mod ou build, ${i?.downloads} download, ${followers__number} seguidores. Downloads grátis no SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} cria mods para Sons of the Forest: ${count__number} mod ou build, ${i?.downloads} downloads, ${followers__number} seguidor. Downloads grátis no SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} cria mods para Sons of the Forest: ${count__number} mod ou build, ${i?.downloads} downloads, ${followers__number} seguidores. Downloads grátis no SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} cria mods para Sons of the Forest: ${count__number} mods e builds, ${i?.downloads} download, ${followers__number} seguidor. Downloads grátis no SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} cria mods para Sons of the Forest: ${count__number} mods e builds, ${i?.downloads} download, ${followers__number} seguidores. Downloads grátis no SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} cria mods para Sons of the Forest: ${count__number} mods e builds, ${i?.downloads} downloads, ${followers__number} seguidor. Downloads grátis no SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} cria mods para Sons of the Forest: ${count__number} mods e builds, ${i?.downloads} downloads, ${followers__number} seguidores. Downloads grátis no SOTF Mods.`)
	
};

const ru_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	const downloadsCount__plural = registry.plural("ru", i?.downloadsCount, {});
	const followers__plural = registry.plural("ru", i?.followers, {});
	const followers__number = registry.number("ru", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивание, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивание, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивание, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивание, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивания, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивания, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачиваний, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачиваний, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачиваний, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачиваний, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивания, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивания, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мод или постройка, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивание, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивание, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивание, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивание, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачиваний, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачиваний, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачиваний, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && downloadsCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачиваний, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивание, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивание, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивание, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивание, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивания, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивания, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачиваний, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачиваний, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачиваний, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && downloadsCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачиваний, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивания, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивания, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} модов и построек, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивание, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивание, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивание, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивание, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "few" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "few" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "few" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "many" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачиваний, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "many" && followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачиваний, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "many" && followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачиваний, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	if (downloadsCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачиваний, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчик. Бесплатные загрузки на SOTF Mods.`);
	if (followers__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`);
	if (followers__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчиков. Бесплатные загрузки на SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} делает моды для Sons of the Forest: ${count__number} мода и постройки, ${i?.downloads} скачивания, ${followers__number} подписчика. Бесплатные загрузки на SOTF Mods.`)
	
};

const sv_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	const downloadsCount__plural = registry.plural("sv", i?.downloadsCount, {});
	const followers__plural = registry.plural("sv", i?.followers, {});
	const followers__number = registry.number("sv", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} gör moddar till Sons of the Forest: ${count__number} modd eller bygge, ${i?.downloads} nedladdning, ${followers__number} följare. Gratis nedladdningar på SOTF Mods.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} gör moddar till Sons of the Forest: ${count__number} modd eller bygge, ${i?.downloads} nedladdning, ${followers__number} följare. Gratis nedladdningar på SOTF Mods.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} gör moddar till Sons of the Forest: ${count__number} modd eller bygge, ${i?.downloads} nedladdningar, ${followers__number} följare. Gratis nedladdningar på SOTF Mods.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} gör moddar till Sons of the Forest: ${count__number} modd eller bygge, ${i?.downloads} nedladdningar, ${followers__number} följare. Gratis nedladdningar på SOTF Mods.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} gör moddar till Sons of the Forest: ${count__number} moddar och byggen, ${i?.downloads} nedladdning, ${followers__number} följare. Gratis nedladdningar på SOTF Mods.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} gör moddar till Sons of the Forest: ${count__number} moddar och byggen, ${i?.downloads} nedladdning, ${followers__number} följare. Gratis nedladdningar på SOTF Mods.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} gör moddar till Sons of the Forest: ${count__number} moddar och byggen, ${i?.downloads} nedladdningar, ${followers__number} följare. Gratis nedladdningar på SOTF Mods.`);
	return /** @type {LocalizedString} */ (`${i?.name} gör moddar till Sons of the Forest: ${count__number} moddar och byggen, ${i?.downloads} nedladdningar, ${followers__number} följare. Gratis nedladdningar på SOTF Mods.`)
	
};

const tr_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	const downloadsCount__plural = registry.plural("tr", i?.downloadsCount, {});
	const followers__plural = registry.plural("tr", i?.followers, {});
	const followers__number = registry.number("tr", i?.followers, {});
	if (count__plural === "one" && downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest için mod yapıyor: ${count__number} mod veya yapı, ${i?.downloads} indirme, ${followers__number} takipçi. SOTF Mods’ta ücretsiz indirin.`);
	if (count__plural === "one" && downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest için mod yapıyor: ${count__number} mod veya yapı, ${i?.downloads} indirme, ${followers__number} takipçi. SOTF Mods’ta ücretsiz indirin.`);
	if (count__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest için mod yapıyor: ${count__number} mod veya yapı, ${i?.downloads} indirme, ${followers__number} takipçi. SOTF Mods’ta ücretsiz indirin.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest için mod yapıyor: ${count__number} mod veya yapı, ${i?.downloads} indirme, ${followers__number} takipçi. SOTF Mods’ta ücretsiz indirin.`);
	if (downloadsCount__plural === "one" && followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest için mod yapıyor: ${count__number} mod ve yapı, ${i?.downloads} indirme, ${followers__number} takipçi. SOTF Mods’ta ücretsiz indirin.`);
	if (downloadsCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest için mod yapıyor: ${count__number} mod ve yapı, ${i?.downloads} indirme, ${followers__number} takipçi. SOTF Mods’ta ücretsiz indirin.`);
	if (followers__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest için mod yapıyor: ${count__number} mod ve yapı, ${i?.downloads} indirme, ${followers__number} takipçi. SOTF Mods’ta ücretsiz indirin.`);
	return /** @type {LocalizedString} */ (`${i?.name}, Sons of the Forest için mod yapıyor: ${count__number} mod ve yapı, ${i?.downloads} indirme, ${followers__number} takipçi. SOTF Mods’ta ücretsiz indirin.`)
	
};

const zh_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	const downloadsCount__plural = registry.plural("zh", i?.downloadsCount, {});
	const followers__plural = registry.plural("zh", i?.followers, {});
	const followers__number = registry.number("zh", i?.followers, {});return /** @type {LocalizedString} */ (`${i?.name} 为 Sons of the Forest 制作模组：${count__number} 个模组和建筑，${i?.downloads} 次下载，${followers__number} 位关注者。在 SOTF Mods 免费下载。`)
};

const ja_profile_meta_description_creator = /** @type {(inputs: Profile_Meta_Description_CreatorInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	const downloadsCount__plural = registry.plural("ja", i?.downloadsCount, {});
	const followers__plural = registry.plural("ja", i?.followers, {});
	const followers__number = registry.number("ja", i?.followers, {});return /** @type {LocalizedString} */ (`${i?.name} は Sons of the Forest の MOD を制作しています：MOD・建築 ${count__number} 件、${i?.downloads} ダウンロード、フォロワー ${followers__number} 人。SOTF Mods で無料ダウンロード。`)
};

/**
* | count__plural | downloadsCount__plural | followers__plural | output |
* | --- | --- | --- | --- |
* | "one" | "one" | "one" | "{name} makes Sons of the Forest mods: {count__number} mod or build, {downloads} download, {followers__number} follower. Free downloads on SOTF Mods." |
* | "one" | "one" | * | "{name} makes Sons of the Forest mods: {count__number} mod or build, {downloads} download, {followers__number} followers. Free downloads on SOTF Mods." |
* | "one" | * | "one" | "{name} makes Sons of the Forest mods: {count__number} mod or build, {downloads} downloads, {followers__number} follower. Free downloads on SOTF Mods." |
* | "one" | * | * | "{name} makes Sons of the Forest mods: {count__number} mod or build, {downloads} downloads, {followers__number} followers. Free downloads on SOTF Mods." |
* | * | "one" | "one" | "{name} makes Sons of the Forest mods: {count__number} mods and builds, {downloads} download, {followers__number} follower. Free downloads on SOTF Mods." |
* | * | "one" | * | "{name} makes Sons of the Forest mods: {count__number} mods and builds, {downloads} download, {followers__number} followers. Free downloads on SOTF Mods." |
* | * | * | "one" | "{name} makes Sons of the Forest mods: {count__number} mods and builds, {downloads} downloads, {followers__number} follower. Free downloads on SOTF Mods." |
* | * | * | * | "{name} makes Sons of the Forest mods: {count__number} mods and builds, {downloads} downloads, {followers__number} followers. Free downloads on SOTF Mods." |
*
* @param {Profile_Meta_Description_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_meta_description_creator = /** @type {((inputs: Profile_Meta_Description_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Description_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_meta_description_creator(inputs)
	if (locale === "de") return de_profile_meta_description_creator(inputs)
	if (locale === "fr") return fr_profile_meta_description_creator(inputs)
	if (locale === "it") return it_profile_meta_description_creator(inputs)
	if (locale === "nl") return nl_profile_meta_description_creator(inputs)
	if (locale === "pl") return pl_profile_meta_description_creator(inputs)
	if (locale === "pt") return pt_profile_meta_description_creator(inputs)
	if (locale === "ru") return ru_profile_meta_description_creator(inputs)
	if (locale === "sv") return sv_profile_meta_description_creator(inputs)
	if (locale === "tr") return tr_profile_meta_description_creator(inputs)
	if (locale === "zh") return zh_profile_meta_description_creator(inputs)
	if (locale === "ja") return ja_profile_meta_description_creator(inputs)
	return en_profile_meta_description_creator(inputs)
});
